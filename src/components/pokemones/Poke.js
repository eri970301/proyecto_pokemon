import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Pokemon from '../secundaria/Pokemon'

class Contenido extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: "",
            abilities: [],
            id: "",
            types: [],
            weight: "",
            height:"", 
            name: ""
        }
        
}

async componentDidMount(){
  let respuesta = await fetch('http://pokeapi.salestock.net/api/v2/pokemon/1/')
  let pokemon = await respuesta.json()
  this.setState({
    img: pokemon.sprites.front_default,
    abilities: pokemon.abilities,
    id: pokemon.id,
    types: pokemon.types,
    weight: pokemon.weight,
    height:pokemon.height,
    name: pokemon.name
  })

  }
  


render () {    
    //Variable para mandat a Pokemon
      let {name, img, abilities, id, types, weight, height} = this.state
      return (
        <Card style={{ width: '18rem' }} className="card_color">
        <Card.Img variant="top" src={this.state.img}/>
        <Card.Body>
          <Card.Title>Pokemon</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Pokemon className="d-flex justify-content-center" name={name} img={img} abilities= {abilities} id={id} weight={weight} height={height} />
        </Card.Body>
      </Card>
      )

}
}
export default Contenido