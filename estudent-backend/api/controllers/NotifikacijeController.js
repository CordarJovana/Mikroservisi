const axios = require('axios');

module.exports = {
    checkNotifications: async function (req, res) {
        const id = req.params.id;
        const apiURL = 'http://34.72.160.161:4185/examRegistrations/checkNotifications';
        const response = await axios.get(apiURL + `/${id}`);

        return res.json(response.data);
    }
};
