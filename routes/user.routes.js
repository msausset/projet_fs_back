const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// Partie authentification

// Inscription
router.post("/register", authController.signUp);
// Connexion
router.post("/login", authController.signIn);
// Déconnexion
router.get("/logout", authController.logout);

// Partie user BDD

// Récupération de tous les utiisateurs
router.get("/", userController.getAllUsers);
// Récupération d'un utiisateur
router.get("/:id", userController.userInfo);
// Suppression
router.delete("/:id", userController.deleteUser);

module.exports = router;
