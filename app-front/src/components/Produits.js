import React, { useEffect, useState } from "react";
import request from "../utils/Request";
import ProduitCard from "./ProduitCard";

function Produits() {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    request.get("/api/produit").then((response) => {
      setProduits(response.data);
      /*       console.log("response :", response.data); */
    });
  }, []);
  return (
    <ul>
      {produits.length
        ? produits.map((produit) => (
            <ProduitCard key={produit.id} produit={produit} />
          ))
        : ""}
    </ul>
  );
}

export default Produits;
