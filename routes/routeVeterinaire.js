const express = require('express');

const router = express.Router();
const veterinaireCtrl = require('../controllers/veterinaireController');

// Définit les routes en utilisant le contrôleur 'AnimalCtrl'.
router.post('/', veterinaireCtrl.createVeterinaire); // Route pour créer un nouvel objet 'Thing' en utilisant une requête POST.
router.get('/', veterinaireCtrl.getAllVeterinaire); // Route pour récupérer tous les objets 'Thing' en utilisant une requête GET.
router.get('/:id', veterinaireCtrl.getById); // Route pour récupérer un objet 'Thing par son ID en utilisant une requête GET.
router.put('/:id', veterinaireCtrl.updateOne); // Route pour mettre à jour un objet 'Thing par son ID en utilisant une requête PUT.
router.delete('/:id', veterinaireCtrl.deleteOne);// Route pour supprimer un objet 'Thing par son ID en utilisant une requête DELETE.
module.exports = router; // Exporte le routeur pour être utilisé dans d'autres parties de l'application.