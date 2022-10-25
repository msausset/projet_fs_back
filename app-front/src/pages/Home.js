import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProduitCard from '../components/ProduitCard';

import cart from '../Cart.json';

import '../Home.css';

export default function Home() {

    const [ produits, setProduits ] = useState([])
    const [ panier, setPanier ] = useState(cart)

    useEffect(() => {

        axios({
            method: 'get',
            url: 'http://localhost:5000/api/produit/'
        }).then((response) => {
            setProduits(response.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    const addToCart = commande => {
        const commandes = panier

        const nouveauPanier = [
            ...commandes,
            commande
        ]

        setPanier(nouveauPanier)

        localStorage.setItem('panier', JSON.stringify(nouveauPanier))
        
        toast('Ajouté au panier !')
    }

    return (
        <Container fluid="md" className="mb-5">
            <Row>
                <Col className='d-flex align-items-baseline'>
                    <h1>Accueil</h1>
                    <Link to="/nouveau-produit" title="Ajouter un nouveau produit" className='ms-auto'>Ajouter un nouveau produit</Link>
                </Col>
            </Row>
            <Row className='justify-content-md-start mt-3'>
                <h3>👟 Chaussures</h3>
                {
                    produits.filter(produit => produit.category === 'chaussures').map(produit => (
                        <Col md="4" key={produit._id}>
                            <ProduitCard produit={produit} addToCart={addToCart} />
                        </Col>
                    ))
                }
            </Row>
            <Row className='justify-content-md-start mt-5'>
                <h3>👖 Pantalons</h3>
                {
                    produits.filter(produit => produit.category === 'pantalon').map(produit => (
                        <Col md="4" key={produit._id}>
                            <ProduitCard produit={produit} addToCart={addToCart} />
                        </Col>
                    ))
                }
            </Row>
            <Row className='justify-content-md-start mt-5'>
                <h3>🧵 Pulls</h3>
                {
                    produits.filter(produit => produit.category === 'pull').map(produit => (
                        <Col md="4" key={produit._id}>
                            <ProduitCard produit={produit} addToCart={addToCart} />
                        </Col>
                    ))
                }
            </Row>
            <Row className='justify-content-md-start mt-5'>
                <h3>👕 Tee-shirts</h3>
                {
                    produits.filter(produit => produit.category === 'tee-shirt').map(produit => (
                        <Col md="4" key={produit._id}>
                            <ProduitCard produit={produit} addToCart={addToCart} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
