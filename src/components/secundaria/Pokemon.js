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
		let { name } = this.props
		return (
			<div>
				<Button onClick={() => { this.handleModal() }}>Más Información</Button>
				<Modal
					show={this.state.show}
					onHide={() => { this.handleModal() }}
					dialogClassName="modal-90w"
					centered>
					<Modal.Header closeButton>
						<Modal.Title >
							Pokemon
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container fluid>
							<Row className= "m-3">
								<Col className="d-flex justify-content-center"><h2>{name}</h2></Col>
							</Row>
							<Row>
								<ImgPokemon/>
							</Row>
							<Row>
								<InfoPokemon/>
							</Row>
						</Container>	
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => { this.handleModal() }}>Close Modal</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)

	}
}
export default Pokemon
