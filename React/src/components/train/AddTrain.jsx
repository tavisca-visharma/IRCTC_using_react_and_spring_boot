import React, { Component } from 'react';
import { Container, Button, Form, Jumbotron, Row, Col } from 'react-bootstrap'
import AddBerth from '../berth/AddBerth'
import AddStation from '../station/AddStation';
import AddQuota from '../quota/AddQuota';

class AddTrain extends Component {
    state = {

        train_number: undefined,
        train_name: undefined,
        originating_station: undefined,
        destination_station: undefined,
        berth_details: [],
        quota_details: [],
        station_details: []

    }


    addTrainNumber(event) {
        this.setState({
            train_number: event.target.value
        })
    }

    addTrainName(event) {
        this.setState({
            train_name: event.target.value
        })
    }

    addOriginatingStation(event) {
        this.setState({
            originating_station: event.target.value
        })
    }

    addDestinationStation(event) {
        this.setState({
            destination_station: event.target.value
        })
    }

    addBerth(berthValue) {

        let new_berth_details = this.state.berth_details
        let flag = false
        for (let i in new_berth_details) {
            if (new_berth_details[i].berthType === berthValue.berthType) {
                new_berth_details[i].seats = berthValue.seats
                flag = true
            }
        }
        if (flag === false) {
            new_berth_details.push(berthValue)
        }
        this.setState({
            berth_details: new_berth_details
        })
        // console.log(this.state)
    }

    addQuota(quotaValue) {

        let new_quota_details = this.state.quota_details
        
        let flag = false
        for (let i in new_quota_details) {
            if (new_quota_details[i].quotaType === quotaValue.quotaType) {
                new_quota_details[i].seats = quotaValue.seats
                flag = true
            }
        }
        if (flag === false) {
            new_quota_details.push(quotaValue)
        }

        this.setState({
            quota_details: new_quota_details
        })
        // console.log(this.state)
    }


    addStation(stationValue) {

        let new_station_details = this.state.station_details
        let flag = false
        for (let i in new_station_details) {
            if (new_station_details[i].stationName === stationValue.stationName) {
                new_station_details[i].arrivalTime = stationValue.arrivalTime
                new_station_details[i].departureTime = stationValue.departureTime
                flag = true
            }
        }
        if (flag === false) {
        new_station_details.push(stationValue)
    }
        this.setState({
            station_details: new_station_details
        })
        // console.log(this.state)
    }


    submitDetails(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h2> Add Train </h2>

                        <Form onSubmit={(event) => this.submitDetails(event)}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="TrainNumber">
                                        <Form.Label><h3>Train Number</h3></Form.Label>
                                        <Form.Control onBlur={(event) => this.addTrainNumber(event)} type="number" placeholder="Enter Train Number" min="0" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="TrainName">
                                        <Form.Label><h3>Train Name</h3></Form.Label>
                                        <Form.Control onBlur={(event) => this.addTrainName(event)} type="text" placeholder="Enter Train Name" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="OriginatingStation">
                                        <Form.Label><h3>Originating Station</h3></Form.Label>
                                        <Form.Control onBlur={(event) => this.addOriginatingStation(event)} type="text" placeholder="Enter originating station" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="DestinationStation">
                                        <Form.Label><h3>Destination Station</h3></Form.Label>
                                        <Form.Control onBlur={(event) => this.addDestinationStation(event)} type="text" placeholder="Enter destination station" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="AddBerth">
                                <AddBerth onChange={(value) => this.addBerth(value)} />
                            </Form.Group>

                            <Form.Group controlId="AddQuota">
                                <AddQuota onChange={(value) => this.addQuota(value)} />
                            </Form.Group>

                            <Form.Group controlId="AddStation">
                                <AddStation onChange={(value) => this.addStation(value)} />
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