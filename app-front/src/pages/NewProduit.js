import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProduitForm from '../components/ProduitForm';

export default function NewProduit() {

    const handleSubmit = async nouveauProduit => {

        await axios({
            method: 'post',
            url: 'http://localhost:5000/api/produit/',
            data: {
                name: nouveauProduit.name,
                price: nouveauProduit.price + '€',
                category: nouveauProduit.category,
                inStock: nouveauProduit.inStock
            }
        }).then(response => {
            console.log(response.data)
            alert('Produit créé')
            window.location = '/'
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <ProduitForm action={'add'} produit={null} onSubmit={handleSubmit}  />
                </Col>
            </Row>
        </Container>
    )
}