import React, { Component } from "react";
import { Table, Container, Alert } from "react-bootstrap";

class TrainList extends Component {
    state = {
        source: this.props.source,
        destination: this.props.destination,
        trains: this.props.trains
    };

    render() {
        if (this.state.trains && this.state.trains.length > 0) {
            return (
                <Container>

                    <h1>{this.state.source} - {this.state.destination}</h1>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Train Number</th>
                                <th>Train Name</th>
                                <th>Arrival</th>
                                <th>Departure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.trains.map((train, index) =>

                                <tr key={index}>
                                    <td>{train.id}</td>
                                    <td>{train.trainName}</td>
                                    <td>{train.arrivalTime}</td>
                                    <td>{train.departureTime}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Alert variant="danger">
                        No Trains
                    </Alert>
                </Container>
            );
        }
    }
}

export default TrainList;
