const User = require("../models/user");

// const fetchNotes = async (req, res) =>{
//     try {
//         const notes = await Note.find();

//         res.json({ notes: notes});
//     } catch (error) {
//         res.status(500).json({
//             status: "failed",
//             data: "Internal Issue"
//         })
//     }
// };

// const fetchNoteById = async (req, res) =>{
//     try {
//         const id = req.params.id;
//         const note = await Note.findById(id);

//         res.json({ note });
//     } catch (error) {
//         res.status(500).json({
//             status: "failed",
//             data: "Internal Issue"
//         })
//     }
// };

const createUser = async (req, res) =>{
    try {
        console.log("req.body", req.body);
        const {name, lastname, username, email, password} = req.body;

        const user = await User.create({
            name, 
            lastname, 
            username, 
            email, 
            password
        });

        // console.log("res", res.json({user}));


        res.json({user});
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            status: "failed",
            data: "Internal Issue"
        })
    }  
};

// const updateNote = async (req, res) =>{
//     try {
//         const id = req.params.id;

//         const {title, body} = req.body;
//         const note = await Note.findByIdAndUpdate(id, {
//             title,
//             body,
//         }, {new: true});

//         res.json({ note });
//     } catch (error) {
//         res.status(500).json({
//             status: "failed",
//             data: "Internal Issue"
//         })
//     }
// };

// const deleteNote = async (req, res) =>{
//     try {
//         const id = req.params.id;
//         const note = await Note.findByIdAndDelete(id);

//         res.status(200).json({
//             status: "successfully delete record",
//             note: note
//         })
//     } catch (error) {
//         res.status(500).json({
//             status: "failed",
//             data: "Internal Issue"
//         })
//     }
// };

module.exports = {
    // fetchNotes,
    // fetchNoteById,
    createUser,
    // updateNote,
    // deleteNote
}

