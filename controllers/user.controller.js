const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

// Obtenir tous les utilisateurs sans le mdp

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  // Retourne donnée format JSON
  res.status(200).json(users);
};

// Informations Utilisateur

module.exports.userInfo = (req, res) => {
  // Vérification id user valide
  if (!ObjectID.isValid(req.params.id))
    // Si erreur : affichage
    return res.status(404).send("ID inconnu : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    // Retourne info user id selectionné
    if (!err) res.send(docs);
    // Si erreur : affichage
    else console.log("ID inconnu : " + err);
  }).select("-password");
};

// Supression utilisateur

module.exports.deleteUser = async (req, res) => {
  // Vérification id user valide
  if (!ObjectID.isValid(req.params.id))
    // Si erreur : affichage
    return res.status(404).send("ID inconnu : " + req.params.id);

  try {
    // Tentative suppression user
    await UserModel.remove({ _id: req.params.id }).exec();
    // Si réussite : affichage
    res.status(200).json({ message: "Supression réussie." });
  } catch (err) {
    // Sinon affichage erreur
    return res.status(404).json({ message: err });
  }
};
