const axios = require('axios');

module.exports = {
    createNewPrijava: async function (req, res) {
        const { ispitId, studentId } = req.body;
        const apiURL = 'http://34.29.210.251:4185/examRegistrations/createNewPrijava';
        const response = await axios.post(apiURL + `/${ispitId}/${studentId}`);

        return res.json(response.data);
    },
    deletePrijava: async function (req, res) {
        const { ispitId, studentId } = req.body;
        const apiURL = 'http://34.29.210.251:4185/examRegistrations/deletePrijava';
        const response = await axios.post(apiURL + `/${ispitId}/${studentId}`);

        return res.json(response.data);
    }
};
