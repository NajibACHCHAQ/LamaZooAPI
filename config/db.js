// db.js

const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',  // Adresse du serveur de base de données
  user: 'root', // Nom d'utilisateur de la base de données
  password: '', // Mot de passe de la base de données
  database: 'lamazoo', // Nom de la base de données
};

// Créez une connexion à la base de données
const connection = mysql.createConnection(dbConfig);

// Connectez-vous à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.message);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
