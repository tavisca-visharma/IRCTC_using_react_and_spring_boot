import React, { Component } from 'react';
import { Container, Button, Form, Jumbotron } from 'react-bootstrap'
import AddBerth from '../berth/AddBerth'
import AddStation from '../station/AddStation';

class AddTrain extends Component {
    state = {

        train_number : undefined,
        train_name : undefined,
        originating_station : undefined,
        destination_station : undefined,
        berth_details : [],
        station_details : []

    }


    addTrainNumber(event){
        this.setState({
            train_number : event.target.value
        })
    }

    addTrainName(event){
        this.setState({
            train_name : event.target.value
        })
    }

    addOriginatingStation(event){
        this.setState({
            originating_station : event.target.value
        })
    }

    addDestinationStation(event){
        this.setState({
            destination_station : event.target.value
        })
    }

    addBerth(berthValue){

        let new_berth_details = this.state.berth_details
        new_berth_details.push(berthValue)
        this.setState({
            berth_details : new_berth_details
        })
        // console.log(this.state)
    }


    addStation(stationValue){

        let new_station_details = this.state.station_details
        new_station_details.push(stationValue)
        this.setState({
            station_details : new_station_details
        })
        // console.log(this.state)
    }


    submitDetails(event){
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h2> Add Train </h2>
                        <Form onSubmit = {(event) => this.submitDetails(event)}>
                            <Form.Group controlId="formBasicTrainNumber">
                                <Form.Label><h3>Train Number</h3></Form.Label>
                                <Form.Control onBlur = {(event) => this.addTrainNumber(event)} type="number" placeholder="Enter Train Number" min="0" />
                            </Form.Group>

                            <Form.Group controlId="formBasicTrainName">
                                <Form.Label><h3>Train Name</h3></Form.Label>
                                <Form.Control onBlur = {(event) => this.addTrainName(event)} type="text" placeholder="Enter Train Name" />
                            </Form.Group>


                            <Form.Group controlId="formBasicOriginatingStation">
                                <Form.Label><h3>Originating Station</h3></Form.Label>
                                <Form.Control onBlur = {(event) => this.addOriginatingStation(event)} type="text" placeholder="Enter originating station" />
                            </Form.Group>

                            <Form.Group controlId="formBasicDestinationStation">
                                <Form.Label><h3>Destination Station</h3></Form.Label>
                                <Form.Control onBlur = {(event) => this.addDestinationStation(event)} type="text" placeholder="Enter destination station" />
                            </Form.Group>


                            <Form.Group controlId="formBasicAddBerth">
                                <AddBerth onChange = {(value) => this.addBerth(value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicAddBerth">
                                <AddStation onChange = {(value) => this.addStation(value)}/>
                            </Form.Group>


                            <Button variant="primary" type="submit">Add Train</Button>
                        </Form>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default AddTrain;