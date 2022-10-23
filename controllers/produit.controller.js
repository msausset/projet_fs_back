const ProduitModel = require("../models/produit.model");
const ObjectID = require("mongoose").Types.ObjectId;

// Récupération de tous les restaus

module.exports.readProduit = (req, res) => {
  // Pas erreur : affichage données
  ProduitModel.find((err, docs) => {
    if (!err) res.send(docs);
    // Si erreur : affichage erreur
    else console.log("Erreur accès données : " + err);
  }).sort({ createdAt: -1 });
};

// Récupération d'un restau

module.exports.readTheProduit = (req, res) => {
  // Vérification id produit valide
  if (!ObjectID.isValid(req.params.id))
    // Si erreur : affichage erreur
    return res.status(404).send("ID inconnu : " + req.params.id);

  ProduitModel.findById(req.params.id, (err, docs) => {
    // Vérification id produit valide
    if (!err) res.send(docs);
    // Si erreur : affichage erreur
    else console.log("ID inconnu : " + err);
  });
};

// Création d'un nouveau Produit

module.exports.createProduit = async (req, res) => {
  const newProduit = new ProduitModel({
    // Récupération données soumises
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    inStock: req.body.inStock,
  });

  try {
    // Sauvegarde dans BDD
    const Produit = await newProduit.save();
    // Retourne données soumises format JSON
    return res.status(201).json(Produit);
  } catch (err) {
    // Si erreur : affichage erreur
    return res.status(400).send(err);
  }
};

// Mis à jour d'un Produit

module.exports.updateProduit = (req, res) => {
  // Vérification id commande valide
  if (!ObjectID.isValid(req.params.id))
    // Si erreur : affichage
    return res.status(404).send("ID inconnu : " + req.params.id);

  const updatedRecord = {
    // Récupération données soumises
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    inStock: req.body.inStock,
  };

  ProduitModel.findByIdAndUpdate(
    // Params de l'id dans l'url
    req.params.id,
    // Met à jour avec données soumises
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      // Pas erreur : envoi données
      if (!err) res.send(docs);
      // Erreur : affichage
      else console.log("Erreur sur la mise à jour : " + err);
    }
  );
};

// Suppression d'un Produit

module.exports.deleteProduit = (req, res) => {
  // Vérification id produit valide
  if (!ObjectID.isValid(req.params.id))
    // Erreur : affichage
    return res.status(404).send("ID inconnu : " + req.params.id);

  ProduitModel.findByIdAndRemove(req.params.id, (err, docs) => {
    // Pas erreur : suppression données BDD
    if (!err) res.send(docs);
    // Erreur : affichage
    else console.log("Erreur suppression : " + err);
  });
};
