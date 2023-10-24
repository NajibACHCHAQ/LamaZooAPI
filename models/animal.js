// models/Animal.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Animal = sequelize.define('animal', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  enclosure: Sequelize.STRING,
});

module.exports = Animal;
