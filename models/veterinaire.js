const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Intervention = require('./intervention');

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
  mail: Sequelize.STRING,
});

// Associations
Veterinaire.hasMany(Intervention, { foreignKey: 'veterinaireId' });
Intervention.belongsTo(Veterinaire, { foreignKey: 'veterinaireId' });

module.exports = Veterinaire;
