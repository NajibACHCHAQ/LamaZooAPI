const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lamazooapi6', 'root', 'my-secret-pw', {
  host: 'localhost',
  dialect: 'mysql', // Utilisation du dialecte MySQL
});

module.exports = sequelize;
