import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProduitForm from '../components/ProduitForm';

export default function UpdateProduit() {

    const { id } = useParams()
    const [ produit, setProduit ] = useState()

    useEffect(() => {
        
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/produit/' + id
        }).then((response) => {
            setProduit(response.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [produit])

    const handleSubmit = async produitModifie => {

        await axios({
            method: 'PUT',
            url: 'http://localhost:5000/api/produit/' + id,
            data: {
                name: produitModifie.name,
                price: produitModifie.price + '€',
                category: produitModifie.category,
                inStock: produitModifie.inStock
            }
        }).then(response => {
            console.log(response.data)
            alert('Produit modifié')
            window.location = '/'
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <ProduitForm action={'edit'} produit={produit} onSubmit={handleSubmit}  />
                </Col>
            </Row>
        </Container>
    )
}