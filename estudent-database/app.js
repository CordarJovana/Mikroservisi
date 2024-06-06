const express = require('express');
const Waterline = require('waterline');
const EstudentModels = require('./estudent-models');
const Application = require('./routes/routes');
const waitPort = require('wait-port');

async function startApplication() {
  const orm = new Waterline();
  const eStudentORM = new EstudentModels(orm);
  eStudentORM.defineModels();

  const port = process.env.PORT || 4185;
  const dbConfig = {
    host: 'db', // The host name defined in your Docker Compose file
    port: 3306,
    timeout: 30000,  // 30 seconds
  };

  try {
    // Wait for the database to be ready
    const isDBReady = await waitPort(dbConfig);
    if (!isDBReady) {
      throw new Error('Database not ready');
    }

    var models = await eStudentORM.initialize();
    const app = express();
    const application = new Application(app, models);
    application.configureRoutes();

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error('Error initializing ORM:', err);
  }
}

startApplication();
