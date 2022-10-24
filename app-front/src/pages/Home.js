import React from "react";
import Produits from "../components/Produits";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>site E-commerce</h1>
      <Produits />
    </div>
  );
}

export default Home;
