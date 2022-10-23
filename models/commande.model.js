const mongoose = require("mongoose");

// Modèle d'une commande

const CommandeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    cart: [
      {
        productId: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        nameProduct: {
          type: String,
          required: true,
        },
        priceProduct: {
          type: String,
          required: true,
        },
      },
    ],
    price: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("commande", CommandeSchema);
