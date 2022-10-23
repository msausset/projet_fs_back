const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");
const maxAge = 3 * 24 * 60 * 60 * 1000;

// Création d'un token utilisateur

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    // expiration -> 3 jours
    expiresIn: maxAge,
  });
};

// Inscription

module.exports.signUp = async (req, res) => {
  const { pseudo, email, password, isAdmin } = req.body;

  try {
    const user = await UserModel.create({
      pseudo,
      email,
      password,
      isAdmin,
    });
    // Réussite : affichage id user
    res.status(200).json({ user: user._id });
  } catch (err) {
    // Si erreur : affichage erreur
    const errors = signUpErrors(err);
    res.status(404).send({ errors });
  }
};

// Connexion

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    // Création jeton secret avec l'ID utilisateur
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    // Si erreur : affichage erreur
    const errors = signInErrors(err);
    res.status(404).json({ errors });
  }
};

// Déconnexion

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
