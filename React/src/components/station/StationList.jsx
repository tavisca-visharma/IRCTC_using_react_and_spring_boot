import React, { Component } from 'react';
import { Table, Alert } from 'react-bootstrap'

class StationList extends Component {

    constructor(props) {
        super(props);
    }

    state = {}
    render() {
        if (this.props.stationsAdded.length > 0) {
            return (
                <div>

                    <Table>
                        <thead style={{ backgroundColor: "brown", color: "white" }}>
                            <tr>
                                <th>Station Name</th>
                                <th>Arrival</th>
                                <th>Departure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.stationsAdded.map((station, index) =>
                                <tr key={index}>
                                    <td>{station.stationName}</td>
                                    <td>{station.arrivalTime}</td>
                                    <td>{station.departureTime}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return (
                <Alert variant="danger"> No Intermediate Stations</Alert>
            );
        }
    }
}

export default StationList;