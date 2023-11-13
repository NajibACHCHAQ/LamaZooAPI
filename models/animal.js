const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const Intervention = require('./intervention');

const Animal = sequelize.define('animal', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  espece: Sequelize.STRING,
  type: Sequelize.STRING,
  emplacement: Sequelize.STRING,
});

// Associations
Animal.hasMany(Intervention, { foreignKey: 'animalId' });
Intervention.belongsTo(Animal, { foreignKey: 'animalId' });

module.exports = Animal;


