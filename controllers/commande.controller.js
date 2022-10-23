const CommandeModel = require("../models/commande.model");
const ObjectID = require("mongoose").Types.ObjectId;

// Récupération de toutes les commandes

module.exports.readCommande = (req, res) => {
  CommandeModel.find((err, docs) => {
    // Pas d'erreur : affichage données
    if (!err) res.send(docs);
    // Si erreur : affichage de l'erreur
    else console.log("Erreur accès données : " + err);
  }).sort({ createdAt: -1 });
};

// Récupération d'une commmande

module.exports.readTheCommande = (req, res) => {
  // Vérification id commande valide
  if (!ObjectID.isValid(req.params.id))
    // Si erreur : affichage erreur
    return res.status(404).send("ID inconnu : " + req.params.id);

  CommandeModel.findById(req.params.id, (err, docs) => {
    // Vérification id commande valide
    if (!err) res.send(docs);
    // Si erreur : affichage erreur
    else console.log("ID inconnu : " + err);
  });
};

// Création d'une nouvelle Commande

module.exports.createCommande = async (req, res) => {
  // var i = 0;
  // var index;
  // do {
  //   index = [
  //     ...index,
  //     {
  //       productId: req.body.cart[i].productId,
  //       quantity: req.body.cart[i].quantity,
  //       nameProduct: req.body.cart[i].nameProduct,
  //       priceProduct: req.body.cart[i].priceProduct,
  //     },
  //   ];
  //   i++;
  // } while (req.body.cart[i]);

  const newCommande = new CommandeModel({
    // Récupération données soumises
    userId: req.body.userId,
    cart: [
      {
        // Maximum 1 article dans le panier (cart[0] seulement)
        productId: req.body.cart[0].productId,
        quantity: req.body.cart[0].quantity,
        nameProduct: req.body.cart[0].nameProduct,
        priceProduct: req.body.cart[0].priceProduct,
      },
    ],
    price: req.body.price,
    city: req.body.city,
    zipCode: req.body.zipCode,
    adress: req.body.adress,
  });

  try {
    // Sauvegarde dans BDD
    const Commande = await newCommande.save();
    // Retourne données soumises format JSON
    return res.status(201).json(Commande);
  } catch (err) {
    // Si erreur : affichage erreur
    return res.status(400).send(err);
  }
};

// Mis à jour d'une Commande

module.exports.updateCommande = (req, res) => {
  // Vérification id commande valide
  if (!ObjectID.isValid(req.params.id))
    // Si erreur : affichage
    return res.status(404).send("ID inconnu : " + req.params.id);

  const updatedRecord = {
    // Récupération données soumises
    cart: [
      {
        productId: req.body.productId,
        nameProduct: req.body.nameProduct,
        priceProduct: req.body.priceProduct,
      },
    ],
    price: req.body.price,
    city: req.body.city,
    zipCode: req.body.zipCode,
    adress: req.body.adress,
    paymentMethod: req.body.paymentMethod,
  };

  CommandeModel.findByIdAndUpdate(
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

// Suppression d'un Commande

module.exports.deleteCommande = (req, res) => {
  // Vérification id commande valide
  if (!ObjectID.isValid(req.params.id))
    // Erreur : affichage
    return res.status(404).send("ID inconnu : " + req.params.id);

  CommandeModel.findByIdAndRemove(req.params.id, (err, docs) => {
    // Pas erreur : suppression données BDD
    if (!err) res.send(docs);
    // Erreur : affichage
    else console.log("Erreur suppression : " + err);
  });
};
