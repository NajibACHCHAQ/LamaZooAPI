// models/Soigneur.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Soigneur = sequelize.define('soigneur', {
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

module.exports = Soigneur;
