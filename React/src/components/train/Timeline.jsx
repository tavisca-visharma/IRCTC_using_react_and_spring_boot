import React, { Component } from 'react';
import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

class TrainTimeline extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        train: this.props.train,
        background_colors: ["#d9534f", "#5cb85c", "#61b8ff", "black"]
    }


    render() {
        if (this.props.train !== undefined) {
            return (
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h2 >{this.props.train.number} - {this.props.train.name}</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container style={{ backgroundColor: "whitesmoke", borderRadius: '8px', paddingTop: "20px" }}>



                            <Timeline lineColor={'#ddd'}>
                                {this.props.train.stops.map((stop, index) =>

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
        }else{
            return(
                <React.Fragment>
                    
                </React.Fragment>
            );
        }
    }
}

export default TrainTimeline;