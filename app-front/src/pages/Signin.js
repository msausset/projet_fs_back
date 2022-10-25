import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SeConnecter from '../components/SeConnecter';

export default function Signin() {

    return (
        <Container fluid="md">
            <Row>
                <Col><h1>Se connecter</h1></Col>
            </Row>
            <Row>
                <Col>
                    <SeConnecter />
                </Col>
            </Row>
        </Container>
    )
}