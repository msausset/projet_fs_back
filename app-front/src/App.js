import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Importation de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

// Importation de react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewProduit from './pages/NewProduit';
import UpdateProduit from './pages/UpdateProduit';
import Cart from './components/Cart';
import Account from './pages/Account';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="nouveau-produit" element={<NewProduit />} />
            <Route path="modifier-produit/:id" element={<UpdateProduit />} />
            <Route path="mon-panier" element={<Cart />} />
            <Route path="mon-compte" element={<Account />} />
          </Route>
        </Routes>
      </Router>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
