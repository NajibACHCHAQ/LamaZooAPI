// Importez les modules nécessaires
const express = require('express'); // Framework web pour Node.js
const sequelize = require('./sequelize'); // Outil ORM pour la base de données
const Animal = require('./models/animal'); // Modèle Sequelize pour les objets "choses" dans la base de données
const cors = require('cors'); // Middleware pour gérer les problèmes de partage de ressources inter-origines (CORS)

// Créez une instance Express
const app = express();
app.use(express.json());


// Configurez les options CORS
const corsOptions = {
  origin: '*', // Remplacez par l'URL de votre application Angular
};

// Utilisez le middleware CORS avec les options configurées
app.use(cors(corsOptions));

// Synchronisez la base de données Sequelize pour créer les tables
sequelize.sync()
  .then(() => {
    console.log('Tables de la base de données créées avec succès');
  })
  .catch((error) => {
    console.error('Erreur lors de la création des tables :', error);
  });

// Utilisez le middleware express.json() pour analyser le corps des requêtes au format JSON

// Définissez une route POST pour créer un nouvel objet "chose"
app.post('/api/stuff', (req, res, next) => {
  // Récupérez les données du corps de la requête
  const { name, type, enclosure } = req.body;

  // Utilisez le modèle `Animal` pour créer une nouvelle entrée dans la base de données
  Animal.create({
    name,
    type,
    enclosure
  })
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch((error) => res.status(400).json({ error }));
});

// Définissez une route GET pour récupérer un objet "chose" par ID
app.get('/api/stuff/:id', (req, res, next) => {
  // Utilisez `Animal.findByPk` pour rechercher l'objet par sa clé primaire (ID)
  Animal.findByPk(req.params.id)
    .then((animal) => {
      if (animal) {
        res.status(200).json(animal);
      } else {
        res.status(404).json({ message: 'Objet non trouvé' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
});

// Définissez une route PUT pour mettre à jour un objet "chose" par ID
app.put('/api/stuff/:id', (req, res, next) => {
  // Récupérez les données du corps de la requête
  const { name, type, enclosure } = req.body;

  // Utilisez `Animal.update` pour mettre à jour l'objet dans la base de données
  Animal.update(
    {
      name,
      type,
      enclosure
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

// Définissez une route GET pour récupérer tous les objets "choses"
app.get('/api/stuff', (req, res, next) => {
  // Utilisez `Animal.findAll` pour récupérer tous les objets dans la base de données
  Animal.findAll()
    .then((animals) => res.status(200).json(animals))
    .catch((error) => res.status(500).json({ error }));
});

// Définissez une route DELETE pour supprimer un objet "chose" par ID
app.delete('/api/stuff/:id', (req, res, next) => {
  // Utilisez `Animal.destroy` pour supprimer l'objet de la base de données
  Animal.destroy({
    where: { id: req.params.id },
  })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(500).json({ error }));
});

// Exportez l'application Express pour l'utiliser ailleurs
module.exports = app;

