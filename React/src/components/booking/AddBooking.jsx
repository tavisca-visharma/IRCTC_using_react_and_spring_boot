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


    selectGender(event,gender){
        this.setState({
            selectedGender : gender.gender
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

    handleSubmit(event){
        event.preventDefault()
        let newPassengersList = this.state.passengers;
        let name = this.state.passengerName
        let age = this.state.passengerAge
        let gender = this.state.selectedGender

        if(gender === "Select Gender")
        return;
        
        let flag = false

        for (let i in newPassengersList){
            if(name === newPassengersList[i].name && age === newPassengersList[i].age){
                newPassengersList[i].gender = gender
                flag = true
            }
        }

        if (flag === false){
        newPassengersList.push({
            name,age,gender
        })
    }

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
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Label> <h5>Name</h5> </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    onChange={(event) => this.addName(event)}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Age">
                                <Form.Label>  <h5>Age</h5> </Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Age"
                                    onChange={(event) => this.addAge(event)}
                                    required
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
                                        <Dropdown.Item key={index} eventKey = "0" onSelect={(event) => this.selectGender(event, {gender})}> {gender} </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Button onClick = {(event) => this.handleSubmit(event)} variant="primary" value="Submit">
                        Add Passenger
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddBooking;