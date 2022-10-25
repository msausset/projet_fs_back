import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../ProduitCard.css';

export default function ProduitCard({ produit }) {

    const deleteProduit = async id => {
        await axios({
            method: 'DELETE',
            url: 'http://localhost:5000/api/produit/' + id
        }).then(response => {
            console.log(response.data)
            alert('Produit supprimé')
            window.location = '/'
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Card className='ProduitCard my-2'>
            <Card.Header as="small" className='ProduitCard-Header text-uppercase pb-3'>{ produit.category }</Card.Header>
            <Card.Body>
                <Card.Title>{ produit.name }</Card.Title>
                <Card.Text>{ produit.price }</Card.Text>
                <Button variant="primary">Ajouter au panier</Button>
                <Link to={"/modifier-produit/" + produit._id} title="Modifier" className='btn btn-warning mx-4'>Modifier</Link>
                <Button variant="danger" onClick={() => deleteProduit(produit._id)}>Supprimer</Button>
            </Card.Body>
        </Card>
    )
}