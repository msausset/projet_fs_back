import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Home.css';

export default function Home() {
    return (
        <Container fluid="md">
            <Row>
                <Col><h1>Accueil</h1></Col>
            </Row>
        </Container>
    )
}