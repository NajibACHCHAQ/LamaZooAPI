const express = require('express');

const router = express.Router();
const interventionCtrl = require('../controllers/interventionController');

// Définit les routes en utilisant le contrôleur 'AnimalCtrl'.
router.post('/', interventionCtrl.createAnimal); // Route pour créer un nouvel objet 'Thing' en utilisant une requête POST.
router.get('/', interventionCtrl.getAllAnimal); // Route pour récupérer tous les objets 'Thing' en utilisant une requête GET.
router.get('/:id', interventionCtrl.getById); // Route pour récupérer un objet 'Thing par son ID en utilisant une requête GET.
router.put('/:id', interventionCtrl.updateOne); // Route pour mettre à jour un objet 'Thing par son ID en utilisant une requête PUT.
router.delete('/:id', interventionCtrl.deleteOne);// Route pour supprimer un objet 'Thing par son ID en utilisant une requête DELETE.
module.exports = router; // Exporte le routeur pour être utilisé dans d'autres parties de l'application.