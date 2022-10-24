import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import SeConnecter from "./components/SeConnecter";
import { UidContext } from "./contextes/AppContext";
import React, { useState, useEffect } from "react";
import { getUser } from "./components/User";

function App() {
  const [uid, setUid] = useState(null);

  return (
    <div className="App">
      <UidContext.Provider value={uid}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="seConnecter" element={<SeConnecter />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UidContext.Provider>
    </div>
  );
}

export default App;
