const express = require('express');
const router = express.Router();

function createIspitniRokRoutes(models) {
  router.get('/getAllExamDeadlines', async (req, res) => {
    try {
      const ispitniRokovi = await models.ispitnirok.find();
      return res.json(ispitniRokovi);
    } catch (error) {
      console.log(error);
      return res.serverError();
    }
  });

  return router;
}

module.exports = createIspitniRokRoutes;
