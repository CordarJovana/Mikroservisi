const axios = require('axios');

module.exports = {
    getAllExamDeadlines: async function (req, res) {
        const apiURL = 'http://34.72.160.161:4185/examDeadlines/getAllExamDeadlines';
        const response = await axios.get(apiURL);
    
        return res.json(response.data);
    }
};

