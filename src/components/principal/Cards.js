import React, { Component } from 'react'
import './../../App.css'
import Contenido from './../pokemones/Poke'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import './../../App.css'

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
}


    render() {
        return(
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
                     <Contenido></Contenido>
            </div>
        )

    }
}

export default Body