import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ImgPokemon from './ImgPokemon'
import InfoPokemon from './InfoPokemon'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Pokemon extends Component {
	constructor() {
		super()
		this.state = {
			show: false,
		}
	}

	handleModal() {
		this.setState({
			show: !this.state.show
		})
	}
	render() {
		let {name, img, abilities, id, weight, height} = this.props

		return (
			<div>
				<Button  id="btn-Info" onClick={() => { this.handleModal() }}>Más Información</Button>
				<Modal
					show={this.state.show}
					onHide={() => { this.handleModal() }}
					dialogClassName="modal-90w"
					centered>
					<Modal.Header id="modalHeader" closeButton>
						<Modal.Title >
							Pokemon
						</Modal.Title>
					</Modal.Header>
					<Modal.Body id="modalBody">
						<Container fluid>
							<Row className= "m-3">
								<Col className="d-flex justify-content-center"><h1 id="namePokemon">{name}</h1></Col>
							</Row>
							<Row>
								<ImgPokemon img={img} name={name}/>
							</Row>
							<Row>
								<InfoPokemon abilities={abilities} id={id} weight={weight} height={height}/>
							</Row>
						</Container>	
					</Modal.Body>
					<Modal.Footer id="modalFooter">
						<Button id="Button" onClick={() => { this.handleModal() }}>Cerrar</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)

	}
}
export default Pokemon
