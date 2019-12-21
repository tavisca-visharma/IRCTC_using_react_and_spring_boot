import React, { Component } from 'react';
import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

class TrainTimeline extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        train: { number: "12345", name: "Vishal Express" },
        background_colors: ["#d9534f", "#5cb85c", "#61b8ff", "black"],
        stops: [
            { name: "Pune", arrivalTime: "7:30 PM", departureTime: "9:32 AM" },
            { name: "Pune", arrivalTime: "7:30 PM", departureTime: "9:32 AM" },
            { name: "Mumbai", arrivalTime: "7:30 PM", departureTime: "9:32 AM" },
            { name: "Pune", arrivalTime: "7:30 PM", departureTime: "9:32 AM" },
            { name: "Pune", arrivalTime: "7:30 PM", departureTime: "9:32 AM" }

        ]
    }


    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2 >{this.state.train.number} - {this.state.train.name}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container style={{ backgroundColor: "whitesmoke", borderRadius: '8px', paddingTop: "20px" }}>



                        <Timeline lineColor={'#ddd'}>
                            {this.state.stops.map((stop, index) =>

                                <TimelineItem
                                    key={index}
                                    dateText={stop.name}
                                    dateInnerStyle={{
                                        background: this.state.background_colors[(index % this.state.background_colors.length)],
                                        // color : this.state.colors[(index % this.state.colors.length) ]
                                    }}
                                    bodyContainerStyle={{
                                        background: '#ddd',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <h3 style={{ color: 'brown' }}>{stop.name}</h3>
                                    <br />
                                    <Row>
                                        <Col>
                                            <h5 style={{ color: 'green' }}>Arrival : </h5>
                                            <h5>{stop.arrivalTime}</h5>
                                        </Col>
                                        <Col>
                                            <h5 style={{ color: 'purple' }}>Departure : </h5>
                                            <h5>{stop.departureTime}</h5>
                                        </Col>
                                    </Row>
                                </TimelineItem>
                            )}

                        </Timeline>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
}

export default TrainTimeline;