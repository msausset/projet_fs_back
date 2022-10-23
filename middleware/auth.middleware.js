const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

// Vérfication du token

module.exports.checkUser = (req, res, next) => {
  // Récupération token user dans cookies navigateur
  const token = req.cookies.jwt;
  // Si trouvé : vérification du token
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      // Si erreur : destruction json web token (jwt)
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        // Pas erreur : récupération données user
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    // Token pas trouvé
    res.locals.user = null;
    next();
  }
};

// Vérification token dans cookies

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("Pas de token");
  }
};
