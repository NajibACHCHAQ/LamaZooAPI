// models/Soigneur.js
const User = require('./user');

class Soigneur extends User {
  constructor(id, firstName, lastName, specialty, username, password) {
    super(id, firstName, lastName, specialty, username, password);
    // Vous pouvez ajouter des propriétés spécifiques aux soigneurs ici.
  }

  // Vous pouvez ajouter des méthodes spécifiques aux soigneurs ici.
}

module.exports = Soigneur;
