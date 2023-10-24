// routes/authRoutes.js

const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  // Affichez le formulaire de connexion
  res.render('login'); // Vous devrez créer une vue pour la page de connexion
});

router.post('/login', (req, res) => {
  // Vérifiez les informations d'identification (nom d'utilisateur, mot de passe)
  const { username, password } = req.body;

  // Vérification de l'authentification (exemple simple)
  if (username === 'soigneur' && password === 'motdepasse') {
    // Authentification réussie pour un soigneur
    req.session.user = { role: 'soigneur' };
    res.redirect('/dashboard');
  } else if (username === 'veterinaire' && password === 'motdepasse') {
    // Authentification réussie pour un vétérinaire
    req.session.user = { role: 'veterinaire' };
    res.redirect('/dashboard');
  } else {
    // Authentification échouée
    res.render('login', { error: 'Identifiants incorrects' });
  }
});

module.exports = router;
