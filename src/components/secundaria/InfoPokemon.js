import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class InfoPokemon extends Component {
    render(){
        console.log(this.props)
        let {abilities, id, weight, height} = this.props
        
    return (
            <Container id="caractPokemon" fluid>
                <Row id="informationRow">
                    <Col className="informationCol">
                        <div>Altura</div>
                        <div>{height}</div>
                    </Col>
                    <Col className="informationCol">
                        <div>Peso</div>
                        <div>{weight}</div>
                    </Col>
                    <Col className="informationCol" >
                        <div>Habilidad</div>
                        <div>
                            {abilities.map((ability) => {
                            return <div>{ability.ability.name}</div>})} 
                            </div>
                        
                    </Col>
                </Row>
            </Container>

    )
    }
    
}

export default InfoPokemon