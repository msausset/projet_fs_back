// Gestion des erreurs inscription
module.exports.signUpErrors = (err) => {
  let errors = {
    pseudo: "",
    email: "",
    password: "",
  };

  // Si erreur contient pseudo
  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";
  // Si erreur contient email
  if (err.message.includes("email")) errors.email = "Email incorrect";
  // Si erreur contient password
  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";
  // Si erreur code 11000 et contient pseudo
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est déjà pris";
  // Si erreur code 11000 et contient email
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

// Gestion erreurs connexion
module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };
  // Si erreur contient email
  if (err.message.includes("email")) errors.email = "Email inconnu";
  // Si erreur contient password
  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};
