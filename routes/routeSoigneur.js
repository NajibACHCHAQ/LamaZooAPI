const express = require('express');

const router = express.Router();
const soigneurCtrl = require('../controllers/soigneurController');


// Définit les routes en utilisant le contrôleur 'AnimalCtrl'.
router.post('/', soigneurCtrl.createSoigneur); // Route pour créer un nouvel objet 'Thing' en utilisant une requête POST.
router.get('/', soigneurCtrl.getAllSoigneur); // Route pour récupérer tous les objets 'Thing' en utilisant une requête GET.
router.get('/:id', soigneurCtrl.getById); // Route pour récupérer un objet 'Thing par son ID en utilisant une requête GET.
router.put('/:id', soigneurCtrl.updateOne); // Route pour mettre à jour un objet 'Thing par son ID en utilisant une requête PUT.
router.delete('/:id', soigneurCtrl.deleteOne);// Route pour supprimer un objet 'Thing par son ID en utilisant une requête DELETE.
module.exports = router; // Exporte le routeur pour être utilisé dans d'autres parties de l'application.