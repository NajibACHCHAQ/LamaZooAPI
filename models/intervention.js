const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Animal = require('./animal');
const Veterinaire = require('./veterinaire');
const Soigneur = require('./soigneur');

const Intervention = sequelize.define('intervention', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: Sequelize.DATE,
  description: Sequelize.STRING,
  designation: Sequelize.STRING,
});

// Associations
Intervention.belongsTo(Animal, { foreignKey: 'animalId' });
Animal.hasMany(Intervention, { foreignKey: 'animalId' });

Intervention.belongsTo(Veterinaire, { foreignKey: 'veterinaireId' });
Veterinaire.hasMany(Intervention, { foreignKey: 'veterinaireId' });

Intervention.belongsTo(Soigneur, { foreignKey: 'soigneurId' });
Soigneur.hasMany(Intervention, { foreignKey: 'soigneurId' });

module.exports = Intervention;
