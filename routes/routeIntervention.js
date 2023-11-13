const express = require('express');

const router = express.Router();
const interventionCtrl = require('../controllers/interventionController');

// Définit les routes en utilisant le contrôleur
router.post('/', interventionCtrl.createIntervention); // Route pour créer un nouvel objet en utilisant une requête POST.
router.get('/', interventionCtrl.getAllIntervention); // Route pour récupérer tous les objets en utilisant une requête GET.
router.get('/:id', interventionCtrl.getById); // Route pour récupérer un objet  par son ID en utilisant une requête GET.
router.put('/:id', interventionCtrl.updateOne); // Route pour mettre à jour un objet  par son ID en utilisant une requête PUT.
router.delete('/:id', interventionCtrl.deleteOne);// Route pour supprimer un objet  par son ID en utilisant une requête DELETE.
module.exports = router; // Exporte le routeur pour être utilisé dans d'autres parties de l'application.

