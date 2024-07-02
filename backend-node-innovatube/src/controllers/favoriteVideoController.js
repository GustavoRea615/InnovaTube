const Favorite = require("../models/favoriteVideo");
const jwt = require('jsonwebtoken');

const addFavoriteVideo = async (req, res) => {
  try {
    const { token, videoTitle, videoID } = req.body;

    const decoded = jwt.verify(token, 'secret');
    const userId = decoded.user.id;

    const newFavoriteVideo = new Favorite({
      user: userId,
      videoTitle,
      videoID
    });

    const favoriteVideo = await newFavoriteVideo.save();
    res.status(200).json(
      {
        status: "Success",
        response: "Add Favorite Video",
        favoriteVideo: favoriteVideo
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: "Failed",
      response: "Internal Issue"
    })
  }
};

const getAllFavoriteVideos = async (req, res) => {
  try {
    const { token } = req.body;

    const decoded = jwt.verify(token, 'secret');
    const userId = decoded.user.id;

    const arrayFavoriteVideos = await Favorite.find({ user: userId });
    res.json(arrayFavoriteVideos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: "Failed",
      response: "Internal Issue"
    })
  }
};

const deleteFavoriteVideo = async (req, res) => {
  try {
    const deleteFavoriteVideo = await Favorite.findByIdAndDelete(req.body.id);

    if (!deleteFavoriteVideo) {
      return res.status(404).json({
        status: "Not Found",
        response: "Video Not Found"
      });
    }

    res.status(200).json({
      status: "Success",
      response: "Video Deleted Correctly"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: "Failed",
      response: "Internal Issue"
    })
  }
};

module.exports = {
  addFavoriteVideo,
  getAllFavoriteVideos,
  deleteFavoriteVideo
};
