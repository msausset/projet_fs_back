import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Account.css';

export default function Account() {
    return (
        <Container fluid="md">
            <Row>
                <Col><h1>Mon compte</h1></Col>
            </Row>
        </Container>
    )
}