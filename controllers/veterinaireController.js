const Veterinaire = require('../models/veterinaire'); // Modèle Sequelize pour les objets "choses" dans la base de données
// Définissez une route POST pour créer un nouvel objet "chose"
exports.createVeterinaire = (req, res, next) => {
    // Récupérez les données du corps de la requête
    const { nom, prenom, specialty, mail, password } = req.body;
  
    // Utilisez le modèle `Animal` pour créer une nouvelle entrée dans la base de données
    Veterinaire.create({
      nom,
      prenom,
      specialty,
      mail,
      password
    })
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  // Définissez une route GET pour récupérer un objet "chose" par ID
  exports.getById = (req, res, next) => {
    // Utilisez `Animal.findByPk` pour rechercher l'objet par sa clé primaire (ID)
    Veterinaire.findByPk(req.params.id)
      .then((soigneur) => {
        if (soigneur) {
          res.status(200).json(soigneur);
        } else {
          res.status(404).json({ message: 'Objet non trouvé' });
        }
      })
      .catch((error) => res.status(500).json({ error }));
  };
  
  // Définissez une route PUT pour mettre à jour un objet "chose" par ID
  exports.updateOne = (req, res, next) => {
    // Récupérez les données du corps de la requête
    const { name, type, enclosure } = req.body;
  
    // Utilisez `Animal.update` pour mettre à jour l'objet dans la base de données
    Veterinaire.update(
      {
        specialty,
        mail,
        password
      },
      {
        where: { id: req.params.id },
      }
    )
      .then(() => res.status(200).json({ message: 'Profil modifié !' }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  // Définissez une route GET pour récupérer tous les objets "choses"
  exports.getAllVeterinaire = (req, res, next) => {
    // Utilisez `Animal.findAll` pour récupérer tous les objets dans la base de données
    Veterinaire.findAll()
      .then((veterinaires) => res.status(200).json(veterinaires))
      .catch((error) => res.status(500).json({ error }));
  };
  
  // Définissez une route DELETE pour supprimer un objet "chose" par ID
  exports.deleteOne = (req, res, next) => {
    // Utilisez `Animal.destroy` pour supprimer l'objet de la base de données
    Veterinaire.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
      .catch((error) => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    Veterinaire.findOne({ mail: req.body.mail })
        .then(veterinaire => {
            if (!veterinaire) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, veterinaire.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        veterinaireId: veterinaire._id,
                        token: jwt.sign(
                            {veterinaireId:veterinaire._id},
                            'MOT_DE_PASSE_TOP_SECRET_DEFENSE_ULTRA_CONFIDENTIEL_PIRE_QUE_LA_NASA',
                            {expiresIn:'24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };