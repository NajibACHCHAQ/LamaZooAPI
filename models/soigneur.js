// models/Veterinaire.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Soigneur = sequelize.define('soigneur', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: Sequelize.STRING,
  prenom: Sequelize.STRING,
  specialty: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  mail:Sequelize.STRING,
});

module.exports = Soigneur;
