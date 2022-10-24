import React from "react";

const Connexion = () => {
  return (
    <div className="bg-white w-1/2 m-auto h-screen">
      <div className="pt-[1.5vw] rounded-lg w-3/4 m-auto">
        <div className="text-[2vw] text-center mb-20">Connexion</div>
        <form>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid grid-rows-2 text-center">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-input rounded-full" />
            </div>
            <div className="grid grid-rows-2 text-center">
              <label htmlFor="email">Pseudo</label>
              <input type="text" className="form-input rounded-full" />
            </div>
            <div className="grid grid-rows-2 text-center">
              <label htmlFor="email">Mot de passe</label>
              <input type="text" className="form-input rounded-full" />
            </div>
            <div className="grid grid-rows-2 text-center">
              <label htmlFor="email">Confirmer le mot de passe</label>
              <input type="text" className="form-input rounded-full" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
