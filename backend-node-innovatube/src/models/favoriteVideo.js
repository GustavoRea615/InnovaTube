const mongoose = require('mongoose');

const favoriteVideoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    videoTitle: {
        type: String,
        required: true
    },
    videoID: {
        type: String,
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

const FavoriteVideo = mongoose.model("favorite_videos", favoriteVideoSchema);

module.exports = FavoriteVideo;