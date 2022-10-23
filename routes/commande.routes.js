const router = require("express").Router();
const commandeController = require("../controllers/commande.controller");

// Récupération de toutes les commandes
router.get("/", commandeController.readCommande);
// Récupération d'une commande
router.get("/:id", commandeController.readTheCommande);
// Création d'une commande
router.post("/", commandeController.createCommande);
// Mise à jour d'une commande
router.put("/:id", commandeController.updateCommande);
// Suppression d'une commande
router.delete("/:id", commandeController.deleteCommande);

module.exports = router;
