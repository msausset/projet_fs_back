const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

// Modèle de User

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minlength: 3,
      malength: 55,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Fonction avant la sauvegarde dans la BDD

userSchema.pre("save", async function (next) {
  // bcrypt hash le mdp
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Vérification du mot de passe s'il correspond dans la BDD

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    // Erreur : affichage mdp incorrect
    throw Error("incorrect password");
  }
  // Erreur : affichage mai incorrect
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
