// models/Veterinaire.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize'); // Assurez-vous que le chemin est correct

const Veterinaire = sequelize.define('veterinaire', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  specialty: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = Veterinaire;

