const axios = require('axios');

const YOUTUBE_API_KEY = 'AIzaSyBT2k47tV3yMTruahqXT3kcUsy8p2G5qG4';

const searchVideos = async (req, res) => {
  const query = req.query.q;
  try {
    const searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'id',
        q: query,
        type: 'video',
        key: YOUTUBE_API_KEY,
        maxResults: 5
      }
    });

    const videoIds = searchResponse.data.items.map(item => item.id.videoId);

    const detailsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet',
        id: videoIds.join(','),
        key: YOUTUBE_API_KEY
      }
    });

    res.json(detailsResponse.data.items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    searchVideos
}
