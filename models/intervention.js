const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const Veterinaire = require('./veterinaire');
const Animal = require('./animal');

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

// Associer le modèle Veterinaire à Intervention avec une relation "hasMany",
// indiquant qu'un Veterinaire peut avoir plusieurs Interventions avec 'veterinaireId' comme clé étrangère.
Veterinaire.hasMany(Intervention, { foreignKey: 'veterinaireId' });



module.exports = Intervention;
