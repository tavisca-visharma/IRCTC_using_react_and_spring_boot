import React, { Component } from 'react';
import { Form, Button, Jumbotron, Container } from 'react-bootstrap'


class Login extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Jumbotron>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><h3>Email address</h3></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><h3>Password</h3></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="success" type="submit">Login</Button>
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default Login;