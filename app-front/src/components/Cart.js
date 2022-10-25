import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Cart.css';

export default function Cart() {

    const [ panier, setPanier ] = useState([])

    useEffect(() => {

        const articles = JSON.parse(localStorage.getItem('panier'))

        if(articles) {
            setPanier(articles)
        }

    }, [])

    return (
        <Container fluid="md">
            <Row>
                <Col><h1>Mon panier</h1></Col>
            </Row>
            <Row>
                <Col>
                
                {
                    panier.map(article => (

                        <ul key={ article.id }>
                            <li>{ article.name }</li>
                            <li>{ article.price + ' x ' + article.qte }</li>
                        </ul>

                    ))

                }
                
                </Col>
            </Row>
        </Container>
    )
}