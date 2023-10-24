// config/sequelize.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('lamazoo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Le type de la base de données que vous utilisez
});

module.exports = sequelize;

