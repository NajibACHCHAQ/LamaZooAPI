// models/Intervention.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Intervention = sequelize.define('intervention', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: Sequelize.DATE, // Assurez-vous que le type de données correspond à la date dans votre base de données
  animalId: Sequelize.INTEGER, // Remplacez par le type de données correct, tel que 'Sequelize.INTEGER'
  veterinaireId: Sequelize.INTEGER, // Même chose ici
  soigneurId: Sequelize.INTEGER, // Même chose ici
  treatment: Sequelize.STRING,
});

module.exports = Intervention;
