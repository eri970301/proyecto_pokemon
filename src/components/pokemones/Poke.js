import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './../../App.css'

class Contenido extends Component {
        constructor(props){
            super(props);
            this.state ={
            pokemon: []
            }
        }


        async componentDidMount(){
                let respuesta = await fetch('http://pokeapi.salestock.net/api/v2/pokemon/?limit=25')
                let pokemon = await respuesta.json()
                this.setState({
                    pokemon : pokemon
                })
                console.dir(pokemon.results[0])
        }

        render () {
            let {pokemon} = this.state
            return (
              <Card style={{ width: '18rem' }} className="card_color">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"/>
              <Card.Body>
                <Card.Title>Pokemon</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
            )
            
        }
}

export default Contenido