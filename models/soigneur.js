const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
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

// // Associer le modèle Soigneur à Intervention avec une relation "hasMany",
// // indiquant qu'un Soigneur peut avoir plusieurs Interventions avec 'soigneurId' comme clé étrangère.
// Soigneur.hasMany(Intervention, { foreignKey: 'soigneurId' });
// // Associer le modèle Intervention à Soigneur avec une relation "belongsTo",
// // où chaque Intervention a une clé étrangère 'soigneurId' qui fait référence à l'ID du Soigneur associé.
// Intervention.belongsTo(Soigneur, { foreignKey: 'soigneurId' });


module.exports = Soigneur;
