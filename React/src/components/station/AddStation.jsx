import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap'
import StationList from './StationList'

class AddStation extends Component {
    state = {
        stationName: undefined,
        arrivalTime: undefined,
        departureTime: undefined,
        stationsAdded: []
    }

    addStationName(event) {
        this.setState({
            stationName: event.target.value
        })
    }

    addArrivalTime(event) {
        this.setState({
            arrivalTime: event.target.value
        })
    }

    addDepartureTime(event) {
        this.setState({
            departureTime: event.target.value
        })
    }

    addStation(event) {
        let newStationsAdded = this.state.stationsAdded
        let stationName = this.state.stationName
        let arrivalTime = this.state.arrivalTime
        let departureTime = this.state.departureTime

        if (stationName === undefined || arrivalTime === undefined || departureTime === undefined)
            return;
        let flag = false

        for (let i in newStationsAdded) {
            if (stationName === newStationsAdded[i].stationName) {
                newStationsAdded[i].arrivalTime = arrivalTime
                newStationsAdded[i].departureTime = departureTime
                flag = true
            }
        }

        if (flag === false) {
            newStationsAdded.push({ stationName, arrivalTime, departureTime })
            this.setState({
                stationsAdded: newStationsAdded
            })
        }

        if (typeof this.props.onChange === 'function') {
            this.props.onChange({ stationName, arrivalTime, departureTime });
        }
    }

    render() {
        return (
            <div>
                <Jumbotron style={{ backgroundColor: "whitesmoke" }}>
                    <h4>Add Intermediate Stations <i>(Optional)</i></h4>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <label htmlFor="stationName">Station Name : </label> &nbsp;
                            <input style={{ borderRadius: "4px", paddingLeft: "5px" }} type="text" placeholder="Enter Station Name" onBlur={(event) => this.addStationName(event)} required /> <br />
                        </Col>
                        <Col>
                            <label htmlFor="arrivalTime">Arrival Time : </label> &nbsp;
                            <input style={{ borderRadius: "4px", paddingLeft: "5px" }} type="time" placeholder="Enter Arrival Time" onBlur={(event) => this.addArrivalTime(event)} required /> <br />
                        </Col>
                        <Col>
                            <label htmlFor="departureTime">Departure Time : </label> &nbsp;
                            <input style={{ borderRadius: "4px", paddingLeft: "5px" }} type="time" placeholder="Enter Departure Time" onBlur={(event) => this.addDepartureTime(event)} required /> <br />
                        </Col>
                    </Row>
                    <br />
                    <Button variant="danger" onClick={(event) => this.addStation(event)}>Add Station</Button>

                    <br />
                    <br />
                    <StationList stationsAdded={this.state.stationsAdded} />

                </Jumbotron>
            </div>
        );
    }
}

export default AddStation;