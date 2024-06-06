const Waterline = require('waterline');
const MySQLAdapter = require('sails-mysql');

class EstudentModels {
  constructor(orm) {
    this.orm = orm;
    this.models = {};
  }

  defineModels() {
    const obavestenjaModel = require('estudent-models/Models/Obavestenja');
    const studentModel = require('estudent-models/Models/Student');
    const predavanjeModel = require('estudent-models/Models/Predavanje');
    const predmetModel = require('estudent-models/Models/Predmet');
    const nastavaModel = require('estudent-models/Models/Nastava');
    const semestarModel = require('estudent-models/Models/Semestar');
    const ocenaModel = require('estudent-models/Models/Ocena');
    const profesorModel = require('estudent-models/Models/Profesor');
    const prijavaModel = require('estudent-models/Models/Prijava');
    const ispitModel = require('estudent-models/Models/Ispit');
    const ispitniRokModel = require('estudent-models/Models/IspitniRok');

    this.models.Obavestenja = Waterline.Collection.extend({
      identity: 'obavestenja',
      tableName: 'obavestenja',
      attributes: obavestenjaModel.attributes,
      primaryKey: obavestenjaModel.primaryKey
    });

    this.models.Student = Waterline.Collection.extend({
      identity: 'student',
      tableName: 'student',
      attributes: studentModel.attributes,
      primaryKey: studentModel.primaryKey,
    });

    this.models.Predavanje = Waterline.Collection.extend({
      identity: 'predavanje',
      tableName: 'predavanje',
      attributes: predavanjeModel.attributes,
      primaryKey: predavanjeModel.primaryKey,
    });

    this.models.Predmet = Waterline.Collection.extend({
      identity: 'predmet',
      tableName: 'predmet',
      attributes: predmetModel.attributes,
      primaryKey: predmetModel.primaryKey,
    });

    this.models.Nastava = Waterline.Collection.extend({
      identity: 'nastava',
      tableName: 'nastava',
      attributes: nastavaModel.attributes,
      primaryKey: nastavaModel.primaryKey,
    });

    this.models.Semestar = Waterline.Collection.extend({
      identity: 'semestar',
      tableName: 'semestar',
      attributes: semestarModel.attributes,
      primaryKey: semestarModel.primaryKey,
    });

    this.models.Ocena = Waterline.Collection.extend({
      identity: 'ocena',
      tableName: 'ocena',
      attributes: ocenaModel.attributes,
      primaryKey: ocenaModel.primaryKey,
    });

    this.models.Profesor = Waterline.Collection.extend({
      identity: 'profesor',
      tableName: 'profesor',
      attributes: profesorModel.attributes,
      primaryKey: profesorModel.primaryKey,
    });

    this.models.Prijava = Waterline.Collection.extend({
      identity: 'prijava',
      tableName: 'prijava',
      attributes: prijavaModel.attributes,
      primaryKey: prijavaModel.primaryKey,
    });

    this.models.Ispit = Waterline.Collection.extend({
      identity: 'ispit',
      tableName: 'ispit',
      attributes: ispitModel.attributes,
      primaryKey: ispitModel.primaryKey,
    });

    this.models.IspitniRok = Waterline.Collection.extend({
      identity: 'ispitniRok',
      tableName: 'ispitnirok',
      attributes: ispitniRokModel.attributes,
      primaryKey: ispitniRokModel.primaryKey,
    });

    this.orm.registerModel(this.models.Obavestenja);
    this.orm.registerModel(this.models.Profesor);
    this.orm.registerModel(this.models.Student);
    this.orm.registerModel(this.models.Semestar);
    this.orm.registerModel(this.models.Predavanje);
    this.orm.registerModel(this.models.Predmet);
    this.orm.registerModel(this.models.Nastava);
    this.orm.registerModel(this.models.Ocena);
    this.orm.registerModel(this.models.Prijava);
    this.orm.registerModel(this.models.IspitniRok);
    this.orm.registerModel(this.models.Ispit);
  }

  async initialize() {
    const config = {
      adapters: {
        default: MySQLAdapter,
        mysql: MySQLAdapter,
      },
      datastores: {
        default: {
          adapter: 'mysql',
          url: process.env.DATABASE_URL || 'mysql://root:my_secret_password@db:3306/estudent'
        },
      },
    };

    return new Promise((resolve, reject) => {
      this.orm.initialize(config, (err, models) => {
        if (err) {
          reject(err);
          return;
        }

        this.models = models.collections;
        resolve(models);
        return models;
      });
    });
  }
}

module.exports = EstudentModels;
