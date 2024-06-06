const express = require('express');
const router = express.Router();

function createStudentRoutes(models) {
    router.get('/getAll', async (req, res) => {
        try {
            const students = await models.student.find();
            return res.json(students);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'An error occurred while fetching students' });
        }
    });

    router.get('/getStudentById/:id', async (req, res) => {
        const { id } = req.params;

        try {
            const student = await models.student.findOne({ id });

            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }

            return res.json(student);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'An error occurred while fetching the student' });
        }
    });

    router.post('/changePassword/:id/:oldPassword/:newPassword', async (req, res) => {
        const { id, oldPassword, newPassword } = req.params;

        try {
            const student = await models.student.findOne({ id });
            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }

            if (student.sifra !== oldPassword) {
                return res.status(400).json({ error: 'The old password is incorrect.' });
            }

            await models.student.updateOne({ id }).set({ sifra: newPassword });

            return res.status(200).json({ message: 'Password changed successfully' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'An error occurred while changing the password.' });
        }
    });

    router.post('/login/:username/:password', async (req, res) => {
        const { username, password } = req.params;

        try {
            const student = await models.student.findOne({ korisnickoIme: username });

            if (!student) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }

            if (password !== student.sifra) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            return res.status(200).json({
                student: student
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'An error occurred while logging in.' });
        }
    });

    return router;
}

module.exports = createStudentRoutes;
