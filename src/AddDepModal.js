import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

class AddDepModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div className="container">
				<Modal>
					<Modal.Header closeButton></Modal.Header>

					<Modal.Body></Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default AddDepModal;
