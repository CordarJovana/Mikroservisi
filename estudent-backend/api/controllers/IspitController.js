const bcrypt = require('bcrypt');
const axios = require('axios');

module.exports = {
  getAllExamsReg: async function (req, res) {
    const { id } = req.params;
    const apiURL = 'http://database:4185/exams/getAllExamsReg';
    const response = await axios.get(apiURL + `/${id}`);
    var result = response.data;

    return res.json(result);
  },
  getActiveExamRegistrations: async function (req, res) {
    const { id } = req.params;
    const apiURL = 'http://database:4185/exams/getActiveExamRegistrations';
    const response = await axios.get(apiURL + `/${id}`);
    var withPrijave = response.data.withPrijave;
    var withoutPrijave = response.data.withoutPrijave;

    return res.ok({ withPrijave, withoutPrijave });
  },
  getFailedExams: async function (req, res) {
    const { id } = req.params;
    const apiURL = 'http://database:4185/exams/getFailedExams';
    const response = await axios.get(apiURL + `/${id}`);

    return res.ok(response.data);
  },
  getAllStudentExams: async function (req, res) {
    const { id } = req.params;
    const apiURL = 'http://database:4185/exams/getAllStudentExams';
    const response = await axios.get(apiURL + `/${id}`);
    var passedExams = response.data.passedExams;
    var nonPassedExams = response.data.nonPassedExams;

    return res.ok({ passedExams, nonPassedExams });
  }
};

