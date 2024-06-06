const axios = require('axios');

module.exports = {
  getActiveNews: async function (req, res) {
    try {
      const apiURL = 'http://database:4185/news/getActiveNews';
      const response = await axios.get(apiURL);
      const activeNews = response.data.activeNews;
      
      return res.ok({ activeNews });
    } catch (err) {
      return res.serverError(err);
    }
  }
}