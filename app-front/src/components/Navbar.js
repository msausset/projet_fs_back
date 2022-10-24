import React from "react";
import { Link } from "react-router-dom";
import { UidContext } from "../contextes/AppContext";

function Navbar() {
  const uid = React.useContext(UidContext);

  return (
    <nav>
      {uid ? (
        <ul>
          <li>
            <Link to="/seDeConnecter">
              <span>se déconnecter</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/seConnecter">
              <span>se connecter</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
