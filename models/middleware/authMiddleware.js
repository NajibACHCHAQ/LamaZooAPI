// middleware/authMiddleware.js

function requireAuth(req, res, next) {
    if (req.session && req.session.user) {
      // L'utilisateur est authentifié
      next();
    } else {
      // Redirigez l'utilisateur vers la page de connexion
      res.redirect('/login');
    }
  }
  
  module.exports = requireAuth;
  