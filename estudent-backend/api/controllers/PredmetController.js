const axios = require('axios');

module.exports = {
  getAllStudentSubjects: async function (req, res) {
    const { id } = req.params;
    const apiURL = 'http://34.29.210.251:4185/subjects/getAllStudentSubjects';
    const response = await axios.get(apiURL + `/${id}`);

    return res.json(response.data);
  }

};

