import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Cart.css';

export default function Cart() {
    return (
        <Container fluid="md">
            <Row>
                <Col><h1>Mon panier</h1></Col>
            </Row>
        </Container>
    )
}