import React, { Component } from "react";
import { Table, Jumbotron, Form, Row, Col, Container, Button } from "react-bootstrap";

class BookingHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // bookingId: 1,
            // date: "23.10.20",
            // trainNumber: 123,
            // trainName: "Garib Rath",
            // numberOfPassengers: 2,
            bookingIdToBeDelete: 0,
            bookingList: [
                {
                    bookingid: 10,
                    date: "23.10.20",
                    trainnumber: 123,
                    trainname: "Garib Rath",
                    numberofpassengers: 2
                },
                {
                    bookingid: 11,
                    date: "23.10.20",
                    trainnumber: 123,
                    trainname: "Garib Rath",
                    numberofpassengers: 2
                }
            ]
        };

        this.deleteRow = this.deleteRow.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            bookingIdToBeDelete: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.deleteRow(this.state.bookingIdToBeDelete);
        //console.log(this.state.bookingIdToBeDelete);
    }

    deleteRow(bookingIdToBeDelete) {
        console.log(bookingIdToBeDelete);
        const listCopy = this.state.bookingList.filter(
            (row) => row.bookingid !== bookingIdToBeDelete
        );

        // const listCopy = [...this.state.bookingList];
        // listCopy.splice(Id, 1);
        console.log(listCopy);
        this.setState({ bookingList: listCopy });
    }

    render() {
        const rows = this.state.bookingList.map((rowData, index) => {
            // const {
            //   bookingid,
            //   date,
            //   trainnumber,
            //   trainname,
            //   numberofpassengers
            // } = rowData;

            return (
                <tr key={index} {...rowData}>
                    <td>{rowData.bookingid}</td>
                    <td>{rowData.date}</td>
                    <td>{rowData.trainnumber}</td>
                    <td>{rowData.trainname}</td>
                    <td>{rowData.numberofpassengers}</td>
                </tr>
            );
        });
        return (
            <React.Fragment>
                <h2>Booking History</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Booking Id</th>
                            <th>Date</th>
                            <th>Train number</th>
                            <th>Train name</th>
                            <th>Number of passengers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
              <td>{this.state.bookingId}</td>
              <td>{this.state.date}</td>
              <td>{this.state.trainNumber}</td>
              <td>{this.state.trainName}</td>
              <td>{this.state.numberOfPassengers}</td>
            </tr> */}
                        {rows}
                    </tbody>
                </Table>

                <Container>
                    <Jumbotron>
                        <Form onSubmit={(event) => this.handleSubmit(event)}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="form">
                                        <Form.Label>
                                            <h5>Enter the booking id you want to delete</h5> 
                    </Form.Label>
                                        <Form.Control
                                            type="number"
                                            min="0"
                                            placeholder="booking id"
                                            value={this.state.value}
                                            onChange={(event) => this.handleChange(event)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button variant="primary" type="submit">
                                Cancel tickets
              </Button>
                        </Form>
                    </Jumbotron>
                </Container>
            </React.Fragment>
        );
    }
}

export default BookingHistory;
