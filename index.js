// Import des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/dashboardRoutes');
// Création de l'application Express
const app = express();

// Configuration des middlewares
app.use(bodyParser.json());
app.use(cors());

// Configuration de la session pour l'authentification (si nécessaire)
app.use(session({
  secret: 'votre_secret',
  resave: false,
  saveUninitialized: true
}));

// Définissez vos routes en important vos fichiers de routes
app.use('/auth', authRoutes); // Assurez-vous que vos routes sont correctement définies dans le dossier "routes"
app.use('/dashboard', apiRoutes); // Assurez-vous que vos routes sont correctement définies dans le dossier "routes"

// Configuration du port d'écoute
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
