import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function InfoPokemon() {
    return (
            <Container className="d-flex justify-content-around" fluid>
                <Row className="d-flex justify-content-around">
                    <Col xs={4} md={4}>
                        <div>Altura</div>
                        <div>90 cm</div>
                    </Col>
                    <Col xs={4} md={4}>
                        <div>Peso</div>
                        <div>80 kg</div>
                    </Col>
                    <Col xs={4} md={4}>
                        <div>Habilidad</div>
                        <div>
                            <div>Clorofila</div>
                            <div>Clorofila</div>
                            <div>Clorofila</div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>

    )
}

export default InfoPokemon