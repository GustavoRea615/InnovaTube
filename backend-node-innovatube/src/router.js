const express = require('express');
const router = express.Router();

const usersController = require("./controllers/usersController");

router.post('/createUser', usersController.createUser);
router.post('/loginUser', usersController.loginUser);
router.post('/recoverPassword', usersController.recoverPassword);
router.post('/resetPassword', usersController.resetPassword);


module.exports = router;