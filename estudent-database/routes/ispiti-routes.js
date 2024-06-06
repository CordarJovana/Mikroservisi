const express = require('express');
const router = express.Router();

function createIspitiRoutes(models) {
  router.get('/getAllExamsReg/:id', async (req, res) => {
    try {
      const studentId = parseInt(req.params.id);
      const ispitIds = await models.prijava.find({ student: studentId }).populate('ispit').then(prijava => prijava.map(p => p.ispit.id));
      const ispiti = await models.ispit.find({ id: { 'in': ispitIds } }).populate('predmet');
      return res.json(ispiti);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'An error occurred while fetching exam registrations' });
    }
  });

  router.get('/getActiveExamRegistrations/:id', async (req, res) => {
    try {
      const today = new Date();
      const studentId = parseInt(req.params.id);

      var polozeniIspitIds = await models.ocena.find({ ocena: { '>': 5 } }).populate('prijava').then(ocene => ocene.filter(o => o.prijava.student === studentId)).map(o => o.prijava.ispit);
      var polozeniPredmeti = await models.ispit.find({ id: { 'in': polozeniIspitIds } }).populate('predmet');
      var slusaniPredmeti = await models.predavanje.find({ student: studentId }).populate('predmet');
      var predmetiZaPolaganjeIds = slusaniPredmeti.filter(predmet => polozeniPredmeti.map(p => p.id).includes(predmet.id) === false).map(i => i.predmet.id);
      var result = await models.ispit.find().populate(['predmet', 'ispitniRok']).then(ispit => ispit.filter(i => i.ispitniRok.datumPocetkaPrijave <= today && i.ispitniRok.datumZavrsetkaPrijave >= today && predmetiZaPolaganjeIds.includes(i.predmet.id)));
      var postojecePrijave = await models.prijava.find({ student: studentId }).then(prijava => prijava.filter(p => result.map(i => i.id).includes(p.ispit)));

      const { withPrijave, withoutPrijave } = result.reduce((acc, curr) => {
        const { withPrijave, withoutPrijave } = acc;
        if (postojecePrijave.map(p => p.ispit).includes(curr.id)) {
          withPrijave.push(curr);
        } else {
          withoutPrijave.push(curr);
        }
        return { withPrijave, withoutPrijave };
      }, { withPrijave: [], withoutPrijave: [] });
      return res.json({ withPrijave, withoutPrijave });
    } catch (err) {
      return res.status(500).json({ error: 'An error occurred while fetching active exam registrations' });
    }
  });

  router.get('/getFailedExams/:id', async (req, res) => {
    try {
      const studentId = parseInt(req.params.id);

      var prijaveIds = await models.ocena.find({ ocena: { '<': 6 } }).populate('prijava').then(ocene => ocene.filter(o => o.prijava.student === studentId)).map(o => o.prijava.id);
      var result = await models.prijava.find({ id: { 'in': prijaveIds } }).populate('ispit');
      return res.ok(result);
    } catch (err) {
      return res.status(500).json({ error: 'An error occurred while fetching failed exams' });
    }
  });

  router.get('/getAllStudentExams/:id', async (req, res) => {
    try {
      const studentId = parseInt(req.params.id);

      var polozeniIspitiOcene = await models.ocena.find({ ocena: { '>': 5 } })
        .populate('prijava')
        .then(ocene => ocene.filter(o => o.prijava.student === studentId));
      var polozeniIspitIds = polozeniIspitiOcene.map(o => o.prijava.ispit);
      var polozeniPredmeti = await models.ispit.find({ id: { 'in': polozeniIspitIds } })
        .populate('predmet');

      var nepolozeniIspitiOcene = await models.ocena.find({ ocena: { '<': 6 } })
        .populate('prijava')
        .then(ocene => ocene.filter(o => o.prijava.student === studentId));
      var nepolozeniIspitIds = nepolozeniIspitiOcene.map(o => o.prijava.ispit);
      var nepolozeniPredmeti = await models.ispit.find({ id: { 'in': nepolozeniIspitIds } })
        .populate('predmet');

      const passedExams = polozeniPredmeti.map(item1 => {
        const item2 = polozeniIspitiOcene.find(item2 => item2.prijava.ispit === item1.id);
        return { ...item1, ...item2 };
      });

      const nonPassedExams = nepolozeniPredmeti.map(item1 => {
        const item2 = nepolozeniIspitiOcene.find(item2 => item2.prijava.ispit === item1.id);
        return { ...item1, ...item2 };
      });

      return res.json({ passedExams, nonPassedExams });
    } catch (err) {
      return res.status(500).json({ error: 'An error occurred while fetching all student exams' });
    }
  });

  return router;
}

module.exports = createIspitiRoutes;
