const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const { name, lastname, username, email, password, securityQuestion, securityAnswer } = req.body;

        let user = await User.findOne({ $or: [{ username }, { email }] });
        if (user) {
            return res.status(400).json({
                status: "Failed",
                response: 'El usuario o el email ya existen'
            });
        }


        user = new User({
            name,
            lastname,
            username,
            email,
            password,
            securityQuestion,
            securityAnswer
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.securityAnswer = await bcrypt.hash(securityAnswer, salt);

        await user.save();
        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'secret', { expiresIn: '12h' }, (err, token) => {
            if (err) throw err;
            res.status(200).json(
                {
                    status: "Success",
                    response: "User created successfully",
                    token: token
                }
            );
        });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            status: "Failed",
            response: "Internal Issue"
        })
    }
};

const loginUser = async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
        if (!user) {
            return res.status(400).json({
                status: "Not Found",
                response: "Username or Email not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: "Invalid Credentials",
                response: "Wrong Password Please Check"
            })
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'secret', { expiresIn: '12h' }, (err, token) => {
            if (err) throw err;
            res.status(200).json(
                {
                    status: "Correct Login",
                    response: "Correct User Credentials",
                    token: token
                }
            );
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "Failed",
            response: "Internal Issue"
        })
    }
};

const recoverPassword = async (req, res) => {
    const { usernameOrEmail, securityAnswer } = req.body;

    try {
        const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
        if (!user) {
            return res.status(400).json({
                status: "Not Found",
                response: "Username or Email not found"
            })
        }

        const isMatch = await bcrypt.compare(securityAnswer, user.securityAnswer);
        if (!isMatch) {
            return res.status(400).json({
                status: "Incorrect",
                response: "Incorrect User Security Response"
            })
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'secret', { expiresIn: '15m' }, (err, token) => {
            if (err) throw err;
            res.status(200).json({
                status: "Correct",
                response: "Correct User Security Response",
                temporalToken: token
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "Failed",
            response: "Internal Issue"
        })
    }
};

const resetPassword = async (req, res) => {
    const { temporalToken, newPassword } = req.body;

    try {
        const decoded = jwt.verify(temporalToken, 'secret');
        const userId = decoded.user.id;
        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                status: "Not Found",
                response: "User not found"
            })
        };

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        await user.save();
        res.status(200).json({
            status: "Password Updated",
            response: "User Password Updated Successfully"
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "Failed",
            response: "Internal Issue or Token Expired"
        });
    }
};


module.exports = {
    loginUser,
    createUser,
    recoverPassword,
    resetPassword,
}

