const axios = require('axios');

module.exports = {
  getAll: async function (req, res) {
    try {
      const apiURL = 'http://34.72.160.161:4185/students/getAll';
      const response = await axios.get(apiURL);
      const students = response.data.students;

      return res.ok({ students });
    } catch (err) {
      return res.serverError(err);
    }
  },
  getStudentById: async function (req, res) {
    const { id } = req.params;
    const apiURL = 'http://34.72.160.161:4185/students/getStudentById';
    const response = await axios.get(apiURL + `/${id}`);

    return res.json(response.data);
  },
  changePassword: async function (req, res) {
    try{
      const id = req.params.id;
      const { oldPassword, newPassword } = req.body;
      const apiURL = 'http://34.72.160.161:4185/students/changePassword';
      const response = await axios.post(apiURL + `/${id}/${oldPassword}/${newPassword}`);
  
      return res.json({responseStatus: 200, data: response.data});
    }catch (error) {
      return res.json({ responseStatus: error.response.status });
    }
  },
  login: async function (req, res) {
    try {
      const { username, password } = req.body;
      const apiURL = 'http://34.72.160.161:4185/students/login';
      const response = await axios.post(apiURL + `/${username}/${password}`);
      //const status = response.status;

      if (response.status != 200) {
        return res.json({ responseStatus: 400 });
      }

      const student = response.data.student;
      req.session.user = student;

      return res.ok({
        responseStatus: 200,
        message: 'Logged in successfully',
        name: student.ime,
        surname: student.prezime,
        id: student.id
      });
    } catch (error) {
      return res.json({ msg: error, responseStatus: 400 });
    }

  },
  logout: async function (req, res) {
    try {
      await req.session.destroy();

      return res.status(200).json({
        message: 'Logged out successfully'
      });
    } catch (err) {
      return res.serverError(err);
    }
  }
};

