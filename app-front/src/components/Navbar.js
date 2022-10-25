import { Link } from 'react-router-dom';

import '../Navbar.css';

export default function Navbar() {

    return (
        <nav className='container my-4 d-flex align-items-center'>
            <Link to="/" className='me-auto' title="Accueil"><span className="material-symbols-rounded">home</span></Link>
            <Link to="/mon-panier" className='me-2' title="Mon panier"><span className="material-symbols-rounded">shopping_cart</span></Link>
            <Link to="/mon-compte" title="Mon compte"><span className="material-symbols-rounded">face</span></Link>
        </nav>
    )
}