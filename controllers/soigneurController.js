const Soigneur = require('../models/soigneur'); // Modèle Sequelize pour les objets "choses" dans la base de données
// Définissez une route POST pour créer un nouvel objet "chose"
exports.createSoigneur = (req, res, next) => {
    // Récupérez les données du corps de la requête
    const { nom, prenom, specialty, mail } = req.body;
  
    // Utilisez le modèle `Animal` pour créer une nouvelle entrée dans la base de données
    Soigneur.create({
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
    // fIND BY iD
    Soigneur.findByPk(req.params.id)
      .then((soigneur) => {
        if (soigneur) {
          res.status(200).json(soigneur);
        } else {
          res.status(404).json({ message: 'Soigneur non trouvé' });
        }
      })
      .catch((error) => res.status(500).json({ error }));
  };
  
  // Définissez une route PUT pour mettre à jour un objet "chose" par ID
  exports.updateOne = (req, res, next) => {
    // Récupérez les données du corps de la requête
    const { specialty, mail, password } = req.body;
  
    // Utilisez `Animal.update` pour mettre à jour l'objet dans la base de données
    Animal.update(
      {
        specialty,
        mail,
        password
      },
      {
        where: { id: req.params.id },
      }
    )
      .then(() => res.status(200).json({ message: 'soigneur modifié !' }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  // Définissez une route GET pour récupérer tous les objets "choses"
  exports.getAllSoigneur = (req, res, next) => {
    // Utilisez `Animal.findAll` pour récupérer tous les objets dans la base de données
    Soigneur.findAll()
      .then((Soigneurs) => res.status(200).json(Soigneurs))
      .catch((error) => res.status(500).json({ error }));
  };
  
  // Définissez une route DELETE pour supprimer un objet "chose" par ID
  exports.deleteOne = (req, res, next) => {
    // Utilisez `Animal.destroy` pour supprimer l'objet de la base de données
    Soigneur.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.status(200).json({ message: 'Soigneur supprimé !' }))
      .catch((error) => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    Soigneur.findOne({ mail: req.body.mail })
        .then(user => {
            if (!soigneur) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, soigneur.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        soigneurId: soigneur._id,
                        token: jwt.sign(
                            {soigneurId:soigneur._id},
                            'MOT_DE_PASSE_TOP_SECRET_DEFENSE_ULTRA_CONFIDENTIEL_PIRE_QUE_LA_NASA',
                            {expiresIn:'24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };