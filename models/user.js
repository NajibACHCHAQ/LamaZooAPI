// models/User.js

class User {
    constructor(id, firstName, lastName, specialty, username, password) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.specialty = specialty; // Commune à tous les utilisateurs
      this.username = username;
      this.password = password; // Champ de mot de passe
    }
  
    // Ajoutez des méthodes communes aux utilisateurs ici, par exemple, pour vérifier le mot de passe.
    // Vous pouvez également ajouter des méthodes d'authentification ici.
  }
  
  module.exports = User;
  