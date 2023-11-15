const express = require('express');

const router = express.Router();
const animalCtrl = require('../controllers/animalController');

// Définit les routes en utilisant le contrôleur ''.
router.post('/', animalCtrl.createAnimal); // Route pour créer un nouvel animal en utilisant une requête POST.
router.get('/', animalCtrl.getAllAnimal); // Route pour récupérer tous les animaux en utilisant une requête GET.
router.get('/:id', animalCtrl.getById); // Route pour récupérer un animal par son ID en utilisant une requête GET.
router.put('/:id', animalCtrl.updateOne); // Route pour mettre à jour un animal par son ID en utilisant une requête PUT.
router.delete('/:id', animalCtrl.deleteOne);// Route pour supprimer un objet 'Thing par son ID en utilisant une requête DELETE.
module.exports = router; // Exporte le routeur pour être utilisé dans d'autres parties de l'application.

