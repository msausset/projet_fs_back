import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import SeConnecter from "./components/SeConnecter";
import { UidContext } from "./contextes/AppContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="seConnecter" element={<SeConnecter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
