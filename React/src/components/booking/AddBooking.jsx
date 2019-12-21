import React, { Component } from 'react';
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap'

class AddBooking extends Component {
    state = {
        passengerName : undefined,
        passengerAge : undefined,
        selectedGender : "Select Gender",
        gender : ["Male", "Female", "Other"],

        passengers : []
    }


    selectGender(event){
        let gender = event.substring(2)
        this.setState({
            selectedGender : gender
        })
    }



    addName(event){
        this.setState({
            passengerName : event.target.value
        })
    }

    addAge(event){
        this.setState({
            passengerAge : event.target.value
        })
    }

    handleSubmit(){
        let newPassengersList = this.state.passengers;
        let name = this.state.passengerName
        let age = this.state.passengerAge
        let gender = this.state.selectedGender
        newPassengersList.push({
            name,age,gender
        })

        this.setState({
            passengers : newPassengersList
        })


        if (typeof this.props.onChange === 'function') {
            this.props.onChange({ name, age, gender });
        }

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Form onSubmit={() => this.handleSubmit()}>
                    <Row>
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    onChange={(event) => this.addName(event)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="To"
                                    onChange={(event) => this.addAge(event)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Dropdown style = {{marginTop : 30  }}>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    {this.state.selectedGender}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {this.state.gender.map((gender, index) =>
                                        <Dropdown.Item key={index} href={"#/" + gender} onSelect={(event) => this.selectGender(event)}> {gender} </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" value="Submit">
                        Add Passenger
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddBooking;