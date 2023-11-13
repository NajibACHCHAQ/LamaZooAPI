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
          res.status(404).json({ message: 'Objet non trouvé' });
        }
      })
      .catch((error) => res.status(500).json({ error }));
  };
  
  exports.updateOne = (req, res, next) => {
    const { date, intervention } = req.body;
  
    Intervention.update(
      {
        date,
        observation,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then(() => res.status(200).json({ message: 'Objet modifié !' }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  // Définissez une route GET pour récupérer tous les objets "choses"
  exports.getAllAnimal = (req, res, next) => {
    // Utilisez `Animal.findAll` pour récupérer tous les objets dans la base de données
    Animal.findAll()
      .then((animals) => res.status(200).json(animals))
      .catch((error) => res.status(500).json({ error }));
  };
  
  // Définissez une route DELETE pour supprimer un objet "chose" par ID
  exports.deleteOne = (req, res, next) => {
    // Utilisez `Animal.destroy` pour supprimer l'objet de la base de données
    Intervention.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
      .catch((error) => res.status(500).json({ error }));
  };