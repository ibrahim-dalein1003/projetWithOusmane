const User = require('../models/Users.model');
const { validationResult } = require('express-validator');
const { generateToken } = require('../utils/token');
const crypto = require('crypto');

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { nom, prenom, email, password, role } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ message: 'Email déjà utilisé' });

    const user = await User.create({ nom, prenom, email, password, role });
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });

    const token = generateToken(user);
    res.json({ token });
    console.log("Utilisateur connecté");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetToken = resetToken;
  user.resetTokenExpire = Date.now() + 3600000; // 1 heure
  await user.save({validateBeforeSave: false});

  // Pour la démo, on affiche juste le lien dans la console :
  // console.log(`Lien de réinitialisation : http://localhost:3000/api/auth/reset-password/${resetToken}`);
  console.log(`Lien de réinitialisation : http://127.0.0.1:3000/api/auth/reset-password/token=${resetToken}`);


  res.json({ message: 'Lien de réinitialisation envoyé (voir console)' });
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { nouveauMotDePasse } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpire: { $gt: Date.now() }
  });

  if (!user) return res.status(400).json({ message: 'Token invalide ou expiré' });

  user.password = nouveauMotDePasse;
  user.resetToken = undefined;
  user.resetTokenExpire = undefined;
  await user.save();

  res.json({ message: 'Mot de passe réinitialisé avec succès' });
};
