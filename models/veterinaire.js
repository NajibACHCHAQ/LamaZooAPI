// models/Soigneur.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Veterinaire = sequelize.define('veterinaire', {
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

module.exports = Veterinaire;