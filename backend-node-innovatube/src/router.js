const express = require('express');
const router = express.Router();

const usersController = require("./controllers/usersController");
const youtubeVideosController = require("./controllers/youtubeVideosController");
const favoriteVideoController = require("./controllers/favoriteVideoController");

router.post('/createUser', usersController.createUser);
router.post('/loginUser', usersController.loginUser);
router.post('/recoverPassword', usersController.recoverPassword);
router.post('/resetPassword', usersController.resetPassword);

router.get('/searchVideos', youtubeVideosController.searchVideos);

router.post('/addFavoriteVideo', favoriteVideoController.addFavoriteVideo);
router.post('/deleteFavoriteVideo', favoriteVideoController.deleteFavoriteVideo);
router.post('/getAllFavoriteVideos', favoriteVideoController.getAllFavoriteVideos);


module.exports = router;