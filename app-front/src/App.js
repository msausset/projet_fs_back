import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Vetements from "./components/Vetements";
import Connexion from "./components/Connexion";
import Vetement from "./components/Vetement";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-vetements" element={<Vetements />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/vetement/:vetement" element={<Vetement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
