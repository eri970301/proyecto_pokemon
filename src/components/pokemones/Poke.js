import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./../../App.css";

class Contenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      abilities: [],
      id: "",
      types: [],
      weight: "",
      height: "",
    };
  }

  async componentDidMount() {
    let url = this.props.url
    let respuesta = await fetch(url);
    let pokemon = await respuesta.json();
    this.setState({
      name: pokemon.name,
      img: pokemon.sprites.front_default,
      abilities: pokemon.abilities,
      id: pokemon.id,
      types: pokemon.types,
      weight: pokemon.weight,
      height: pokemon.height,
    });
    console.log(url);
  }

  render() {
    let { name, img, abilities, id, types, weight, height } = this.state;
    return (
      <div>
        <Card style={{ width: "16rem" }} className="card_color" key={name}>
          <Card.Img variant="top" className="img_card" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {id}
              <div>
                {types.map((types) => {
                  return <p>{types.type.name}</p>;
                })}
              </div>
            </Card.Text>
            <Button variant="danger" className="btn_cards">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Contenido;
