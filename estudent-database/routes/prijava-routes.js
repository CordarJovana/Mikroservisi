const express = require('express');
const router = express.Router();

function createPrijavaRoutes(models) {
  router.post('/createNewPrijava/:ispitId/:studentId', async (req, res) => {
    try {
      const { ispitId, studentId } = req.params;

      const ispit = await models.ispit.findOne({ id: ispitId });
      if (!ispit) {
        return res.status(400).json({ message: 'Ispit with provided id does not exist' });
      }
      const student = await models.student.findOne({ id: studentId });
      if (!student) {
        return res.status(400).json({ message: 'Student with provided id does not exist' });
      }
      const prijavaFromDb = await models.prijava.find({ student: studentId, ispit: ispitId });
      if (prijavaFromDb.length > 0) {
        return res.status(400).json({ message: 'Prijava with provided ids already exists' });
      }

      const maxPrijavaId = await models.prijava.find().sort({ id: -1 }).limit(1).then(i => i.map(i => i.id));
      let maxId = 0;
      if (maxPrijavaId) {
        maxId = parseInt(maxPrijavaId) + 1;
      }
      const prijava = {
        id: maxId, ispit: ispitId, student: studentId, datumPrijave: new Date()
      };
      await models.prijava.create(prijava);

      res.status(201).json(prijava);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.post('/deletePrijava/:ispitId/:studentId', async (req, res) => {
    try {
      var { ispitId, studentId } = req.params;
      studentId = parseInt(studentId);
      ispitId = parseInt(ispitId);
      await models.prijava.destroyOne({ ispit: ispitId, student: studentId });
      res.send('Prijava deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.get('/checkNotifications/:id', async (req, res) => {
    try {
      const today = new Date();
      const studentId = parseInt(req.params.id);

      const aktivniIspitniRok = await models.ispitnirok.findOne({ datumPocetkaPrijave: { '<=': today }, datumZavrsetkaPrijave: { '>=': today } });
      const ispitiZaStudentaIds = await models.prijava.find({ student: studentId }).populate('ispit').then(prijava => prijava.filter(p => p.ispit.datum.getDate() === today.getDate() + 1).map(p => p.ispit.id));
      const naziviPredmeta = await models.ispit.find({ id: { 'in': ispitiZaStudentaIds } }).populate('predmet').then(ispit => ispit.map(i => i.predmet.nazivPredmeta));

      const newNotifications = [];
      if (aktivniIspitniRok) {
        newNotifications.push(`Пријава за ${aktivniIspitniRok.naziv} испитни рок је у току.`);
      }
      for (const nazivPredmeta of naziviPredmeta) {
        newNotifications.push(`Одржавање испита ${nazivPredmeta} је сутра.`);
      }

      res.json({ newNotifications: newNotifications });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  return router;
}

module.exports = createPrijavaRoutes;
