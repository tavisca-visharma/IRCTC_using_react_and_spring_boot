import React, { Component } from "react";
import { Link } from 'react-router-dom';


import { Table, Container, Alert, Jumbotron, Button } from "react-bootstrap";
import Timeline from './Timeline'

class TrainList extends Component {
    state = {
        source: this.props.source,
        destination: this.props.destination,
        // trains: this.props.trains,
        trains: this.props.trains,
        showTimelineModal: false,
        selectedIndex: undefined
    };


    openTimelineModal() {
        this.setState({
            showTimelineModal: true
        })
    }

    closeTimelineModal() {
        this.setState({
            showTimelineModal: false
        })
    }

    displayTimeline(event, index) {
        this.openTimelineModal()
        this.setState({
            selectedIndex: index
        })
        console.log(index, this.state.selectedIndex)
    }


    render() {
        // console.log("src", this.props.source)
        if (this.props.isSubmitted && this.props.source !== undefined && this.props.destination !== undefined && this.props.trains && this.props.trains.length > 0) {
            return (
                <Container>
                    <Jumbotron style={{ backgroundColor: "white" }}>

                        <h1>{this.props.source} - {this.props.destination}</h1>

                        <i>(Note :- Click on train to view its timeline)</i>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Train Number</th>
                                    <th>Train Name</th>
                                    <th>Arrival</th>
                                    <th>Departure</th>
                                    <th>Book Tickets</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.trains.map((train, index) =>

                                    <tr key={index}>
                                        <td onClick={(event) => this.displayTimeline(event, index)}>{train.id}</td>
                                        <td onClick={(event) => this.displayTimeline(event, index)}>{train.name}</td>
                                        <td onClick={(event) => this.displayTimeline(event, index)}>{train.stops[0].arrivalTime}</td>
                                        <td onClick={(event) => this.displayTimeline(event, index)}>{train.stops[0].departureTime}</td>
                                        <td>

                                            <Link to={{
                                                pathname: '/booking',
                                                state: {train : train}
                                            }
                                            }>
                                                <Button variant="primary">Book</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                            <Timeline train={this.state.trains[this.state.selectedIndex]} show={this.state.showTimelineModal} onHide={() => this.closeTimelineModal()} />
                        </Table>
                    </Jumbotron>
                </Container>
            );
        } else if (this.props.source === undefined || this.props.destination === undefined || this.props.isSubmitted === false) {
            return (
                <div>

                </div>
            );
        }
        else {
            return (
                <Container>
                    <Jumbotron style={{ backgroundColor: "white" }}>
                        <Alert variant="danger">
                            <h5>No Trains</h5>
                        </Alert>
                    </Jumbotron>
                </Container>
            );
        }
    }
}

export default TrainList;
