const express = require('express');
const router = express.Router();

function createPredmetRoutes(models) {
  router.get('/getAllStudentSubjects/:id', async (req, res) => {
    try {
      const studentId = parseInt(req.params.id);

      const subjectIds = await models.predavanje.find({ student: studentId }).populate('predmet').then(p => p.map(s => s.predmet.id));
      const subjects = await models.predmet.find({ id: { 'in': subjectIds } }).populate('semestar');
      const professors = await models.nastava.find({ predmet: { 'in': subjectIds } }).populate('profesor');

      const professorsBySubject = professors.reduce((acc, curr) => {
        if (acc[curr.predmet]) {
          acc[curr.predmet].push(curr.profesor);
        } else {
          acc[curr.predmet] = [curr.profesor];
        }
        return acc;
      }, {});

      const result = subjects.map(item => {
        const professorsForSubject = professorsBySubject[item.id] || [];
        return { ...item, professors: professorsForSubject };
      });

      return res.status(200).json({ result });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'An error occurred while fetching subjects' });
    }
  });

  return router;
}

module.exports = createPredmetRoutes;
