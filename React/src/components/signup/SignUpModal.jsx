import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

class SignUpModal extends Component {

    constructor(props) {
        super(props);
    }

    state = {}


    render() {
        console.log(this.props)
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Sign Up</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="Email">
                            <Form.Label><h5>Email</h5></Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="Password">
                            <Form.Label><h5>Password</h5></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="ConfirmPassword">
                            <Form.Label><h5>Confirm Password</h5></Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Button centered = "true" variant="danger" type="submit"> Sign Up </Button>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>

               </Modal.Footer> */}
            </Modal >
        );
    }
}

export default SignUpModal;