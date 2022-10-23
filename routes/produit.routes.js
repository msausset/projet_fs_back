const router = require("express").Router();
const produitController = require("../controllers/produit.controller");

// Récupération de tous les produits
router.get("/", produitController.readProduit);
// Récupération d'un produit
router.get("/:id", produitController.readTheProduit);
// Création d'un produit
router.post("/", produitController.createProduit);
// Mise à jour d'un produit
router.put("/:id", produitController.updateProduit);
// Suppression d'un produit
router.delete("/:id", produitController.deleteProduit);

module.exports = router;
