import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

function ImgPokemon () { 
    let img = [ {name:"bulbasaur", url:"https://img1.freepng.es/20180504/dre/kisspng-computer-icons-50x50-neighbor-5aec6f2fdc8618.7772193315254443999033.jpg"},
                {name:"bulbasaur1", url:"https://img1.freepng.es/20180504/dre/kisspng-computer-icons-50x50-neighbor-5aec6f2fdc8618.7772193315254443999033.jpg"},
                {name:"bulbasaur2", url:"https://img1.freepng.es/20180504/dre/kisspng-computer-icons-50x50-neighbor-5aec6f2fdc8618.7772193315254443999033.jpg"}]

    return (
    <Container fluid>
        <Row className="d-flex justify-content-around">
            {img.map((pokemon) => {
            return (<Card key={pokemon.name}>
                        <Card.Img  src={pokemon.url} />
                        <Card.Body className="d-flex justify-content-center">
                            <Card.Text>{pokemon.name}</Card.Text>                            
                        </Card.Body>
                    </Card>);
            })}

                
        </Row>
    </Container>
    ) 
}

export default ImgPokemon
