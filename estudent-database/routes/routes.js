const express = require('express');
const createStudentRoutes = require('./student-routes.js');
const createObavestenjaRoutes = require('./obavestenja-routes.js');
const createIspitiRoutes = require('./ispiti-routes.js');
const createIspitniRokRoutes = require('./ispitniRok-routes.js');
const createPredmetRoutes = require('./predmet-routes.js');
const createPrijavaRoutes = require('./prijava-routes.js');

class Application {
  constructor(app, models) {
    this.app = app;
    this.models = models.collections;
    this.router = express.Router();
  }

  async configureRoutes() {
    // Health check endpoint
    this.app.get('/health', (req, res) => {
      res.status(200).send('OK');
    });

    this.app.use('/news', createObavestenjaRoutes(this.models));
    this.app.use('/students', createStudentRoutes(this.models));
    this.app.use('/exams', createIspitiRoutes(this.models));
    this.app.use('/examDeadlines', createIspitniRokRoutes(this.models));
    this.app.use('/subjects', createPredmetRoutes(this.models));
    this.app.use('/examRegistrations', createPrijavaRoutes(this.models));
  }
}

module.exports = Application;
