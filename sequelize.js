const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lamazooapi2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Utilisation du dialecte MySQL
});

module.exports = sequelize;
