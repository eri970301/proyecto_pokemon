import React, { Component } from "react";
import "./../../App.css";
import Contenido from "./../pokemones/Poke";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "./../../App.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      name: "",
    };
  }
  async componentDidMount() {
    let respuesta = await fetch(
      "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25"
    );
    let pokemon = await respuesta.json();
    this.setState({
      pokemon: pokemon.results,
    });
  }

  render() {
    return (
      <div className="body">
        <div className="input_search">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div className = "cards_each">
          {" "}
          {this.state.pokemon.map((pokemon) => {
            return <Contenido {...pokemon}> </Contenido>;
          })}
        </div>
      </div>
    );
  }
}

export default Body;