// Importez les modules nécessaires
const express = require('express'); // Framework web pour Node.js
const sequelize = require('./sequelize'); // Outil ORM pour la base de données
const cors = require('cors'); // Middleware pour gérer les problèmes de partage de ressources inter-origines (CORS)
const routeAnimal = require('./routes/routeAnimal');
const routeIntervention = require('./routes/routeIntervention');
// Créez une instance Express
const app = express();
app.use(express.json());
// Configurez les options CORS
const corsOptions = {
  origin: '*', // Remplacez par l'URL de votre application Angular
};
// Utilisez le middleware CORS avec les options configurées
app.use(cors(corsOptions));
// Synchronisez la base de données Sequelize pour créer les tables
sequelize.sync()
  .then(() => {
    console.log('Tables de la base de données créées avec succès');
  })
  .catch((error) => {
    console.error('Erreur lors de la création des tables :', error);
  });
app.use('/api/animal', routeAnimal);
app.use('/api/intervention', routeIntervention);
// Exportez l'application Express pour l'utiliser ailleurs
module.exports = app;

