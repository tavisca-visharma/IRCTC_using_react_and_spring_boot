import React, { Component } from 'react';
import { Form, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap'


class Login extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Jumbotron>
                    <Form>
                        <Form.Group controlId="Email">
                            <Form.Label><h3>Email address</h3></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="Password">
                            <Form.Label><h3>Password</h3></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="role">
                                    <Form.Label><h3>User</h3></Form.Label>
                                    <Form.Control name="role" type="radio" placeholder="user" />
                                </Form.Group>
                            </Col>
                            <Col><Form.Group controlId="role">
                                <Form.Label><h3>Admin</h3></Form.Label>
                                <Form.Control name="role" type="radio" placeholder="admin" />
                            </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <Button variant="success" type="submit">Login</Button>
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default Login;