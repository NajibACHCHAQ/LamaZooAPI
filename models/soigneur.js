const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Intervention = require('./intervention'); // Assurez-vous d'importer le modèle Intervention si ce n'est pas déjà fait

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
  mail: Sequelize.STRING,
});

// Déclarer l'association One-to-Many entre Soigneur et Intervention
Soigneur.hasMany(Intervention, { foreignKey: 'soigneurId' });
Intervention.belongsTo(Soigneur, { foreignKey: 'soigneurId' });

module.exports = Soigneur;
