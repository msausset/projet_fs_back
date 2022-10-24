import React from "react";
import { Card } from "react-bootstrap";

function ProduitCard(produit) {
  /*  console.log(produit.produit._id); */
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>
          <p>
            <strong>ID :</strong> {produit.produit._id}
          </p>

          <p>
            <strong>name :</strong> {produit.produit.name}
          </p>

          <p>
            <strong>price :</strong> {produit.produit.price}
          </p>

          <p>
            <strong>category :</strong> {produit.produit.category}
          </p>

          <p>
            <strong>inStock :</strong> {produit.produit.inStock}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProduitCard;
