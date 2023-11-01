// Importation des modules nécessaires
const Sequelize = require('sequelize'); // Importe la bibliothèque Sequelize
const sequelize = require('../sequelize'); // Importe la configuration Sequelize

// Définition du modèle Animal
const Animal = sequelize.define('animal', {
  id: {
    type: Sequelize.INTEGER,         // Champ ID de type entier (integer)
    primaryKey: true,               // Champ clé primaire
    autoIncrement: true,            // Auto-incrémentation activée pour ID
  },
  name: Sequelize.STRING,           // Champ "name" de type chaîne de caractères (string)
  type: Sequelize.STRING,           // Champ "type" de type chaîne de caractères (string)
  enclosure: Sequelize.STRING,      // Champ "enclosure" de type chaîne de caractères (string)
});

// Exportation du modèle Animal pour une utilisation ultérieure
module.exports = Animal;

