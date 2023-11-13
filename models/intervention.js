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

// Associer le modèle Intervention à Animal avec une relation "belongsTo",
// où chaque Intervention a une clé étrangère 'animalId' qui fait référence à l'ID de l'Animal associé.
Intervention.belongsTo(Animal, { foreignKey: 'animalId' });

// Associer le modèle Animal à Intervention avec une relation "hasMany",
// indiquant qu'un Animal peut avoir plusieurs Interventions avec 'animalId' comme clé étrangère.
Animal.hasMany(Intervention, { foreignKey: 'animalId' });

// Associer le modèle Intervention à Veterinaire avec une relation "belongsTo",
// où chaque Intervention a une clé étrangère 'veterinaireId' qui fait référence à l'ID du Veterinaire associé.
Intervention.belongsTo(Veterinaire, { foreignKey: 'veterinaireId' });

// Associer le modèle Veterinaire à Intervention avec une relation "hasMany",
// indiquant qu'un Veterinaire peut avoir plusieurs Interventions avec 'veterinaireId' comme clé étrangère.
Veterinaire.hasMany(Intervention, { foreignKey: 'veterinaireId' });

// Associer le modèle Intervention à Soigneur avec une relation "belongsTo",
// où chaque Intervention a une clé étrangère 'soigneurId' qui fait référence à l'ID du Soigneur associé.
Intervention.belongsTo(Soigneur, { foreignKey: 'soigneurId' });

// Associer le modèle Soigneur à Intervention avec une relation "hasMany",
// indiquant qu'un Soigneur peut avoir plusieurs Interventions avec 'soigneurId' comme clé étrangère.
Soigneur.hasMany(Intervention, { foreignKey: 'soigneurId' });


module.exports = Intervention;
