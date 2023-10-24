// routes/dashboardRoutes.js

const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');

// Appliquez le middleware d'authentification aux routes protégées
router.get('/dashboard', requireAuth, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

module.exports = router;
