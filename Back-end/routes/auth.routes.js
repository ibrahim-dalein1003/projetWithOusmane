const express = require('express');
const { body } = require('express-validator');
const auth = require('../controllers/auth.controller');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

// Enregistrement
router.post(
  '/register',
  [
    body('nom').notEmpty().withMessage('Nom requis'),
    body('prenom').notEmpty().withMessage('Prenom requis'),
    body('email').isEmail().withMessage('Email invalide'),
    body('password').isLength({ min: 8 }).withMessage('Mot de passe min 8 caractères')
  ],
  auth.register
);

// Connexion
router.post('/login', auth.login);

// Mot de passe oublié
router.post('/forgot-password', auth.forgotPassword);

// Réinitialisation
router.post('/reset-password/:token', auth.resetPassword);

// Exemple de route protégée (admin uniquement)
router.get('/admin', protect, restrictTo('admin'), (req, res) => {
  res.send('Bienvenue, administrateur.');
});

module.exports = router;
