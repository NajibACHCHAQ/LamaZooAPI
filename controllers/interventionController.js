const Intervention = require('../models/intervention'); // Modèle Sequelize pour les objets "choses" dans la base de données
exports.createIntervention = (req, res, next) => {
    const { designation, veterinaireId , description, animalId } = req.body;
    Intervention.create({
      designation,
      description,
      veterinaireId,
      animalId
    })
      .then(() => res.status(201).json({ message: 'Intervention enregistré !' }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  exports.getById = (req, res, next) => {
    Intervention.findByPk(req.params.id)
      .then((intervention) => {
        if (intervention) {
          res.status(200).json(intervention);
        } else {
          res.status(404).json({ message: 'Intervention non trouvé' });
        }
      })
      .catch((error) => res.status(500).json({ error }));
  };
  
  exports.updateOne = (req, res, next) => {
    const { date, observation } = req.body;
    Intervention.update(
      {
        date,
        observation,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then(() => res.status(200).json({ message: 'Intervention modifié !' }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  exports.getAllIntervention = (req, res, next) => {
    Intervention.findAll()
      .then((Interventions) => res.status(200).json(Interventions))
      .catch((error) => res.status(500).json({ error }));
  };
  
  // sUPPRIMMER INTERVENTION BY iD
  exports.deleteOne = (req, res, next) => {
    Intervention.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.status(200).json({ message: 'Intervention supprimé !' }))
      .catch((error) => res.status(500).json({ error }));
  };