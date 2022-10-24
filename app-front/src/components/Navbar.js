import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-center bg-white drop-shadow-xl">
      <div className="flex m-auto w-1/2 items-center h-24">
        <Link
          to="/"
          className="rounded-full hover:underline hover:bg-slate-100 hover:text-black ease-in duration-300 flex-auto"
        >
          <p className="text-[1.5vw]">Accueil</p>
        </Link>
        <Link
          to="/nos-vetements"
          className="rounded-full hover:underline hover:bg-slate-100 hover:text-black ease-in duration-300 flex-auto"
        >
          <p className="text-[1.5vw]">Nos vêtements</p>
        </Link>
        <Link
          to="/connexion"
          className="rounded-full hover:underline hover:bg-slate-100 hover:text-black ease-in duration-300 flex-auto"
        >
          <p className="text-[1.5vw]">Connexion</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
