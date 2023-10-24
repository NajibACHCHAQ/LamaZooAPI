// models/Veterinaire.js
const User = require('./user');

class Veterinaire extends User {
  constructor(id, firstName, lastName, specialty, username, password) {
    super(id, firstName, lastName, specialty, username, password);
    // Vous pouvez ajouter des propriétés spécifiques aux vétérinaires ici.
  }

  // Vous pouvez ajouter des méthodes spécifiques aux vétérinaires ici.
}

module.exports = Veterinaire;
