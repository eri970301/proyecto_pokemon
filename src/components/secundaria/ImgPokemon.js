import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

class ImgPokemon extends Component {

    render() {
        let {img, name} =this.props
        return (
            <Container fluid>
                <Row className="d-flex justify-content-around">
                    <Card id="card" key={name}>
                            <Card.Img src={img} />
                            <Card.Body className="d-flex justify-content-center cardText">
                                <Card.Text className="cardName text-light">{name}</Card.Text>
                            </Card.Body>
                    </Card>
                    {/* {img.map((pokemon) => {
                        return (<Card id="card" key={name}>
                            <Card.Img src={pokemon.img} />
                            <Card.Body className="d-flex justify-content-center cardText">
                                <Card.Text className="cardName text-light">{pokemon.name}</Card.Text>
                            </Card.Body>
                        </Card>);
                    })} */}
                </Row>
            </Container>
        )
    }

}

export default ImgPokemon
