// models/Intervention.js

class Intervention {
    constructor(id, date, animalId, soigneurId, veterinaireId, treatment) {
      this.id = id;
      this.date = date;
      this.animalId = animalId;
      this.veterinaireId = veterinaireId;
      this.soigneurId = soigneurId;
      this.treatment = treatment;
    }
  }
  
module.exports = Intervention;