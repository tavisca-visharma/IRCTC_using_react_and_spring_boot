import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromStation: "",
      toStation: "",
      date: ""
    };

    this.handleChangeOnfromStation = this.handleChangeOnfromStation.bind(this);
    this.handleChangeOntoStation = this.handleChangeOntoStation.bind(this);
    this.handleChangeOnDate = this.handleChangeOnDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeOnfromStation(event) {
    event.preventDefault();
    this.setState({
      fromStation: event.target.value
    });
  }

  handleChangeOntoStation(event) {
    event.preventDefault();
    this.setState({
      toStation: event.target.value
    });
  }

  handleChangeOnDate(event) {
    event.preventDefault();
    this.setState({
      date: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="fromStation">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="text"
                placeholder="From"
                onChange={this.handleChangeOnfromStation}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="toStation">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                placeholder="To"
                onChange={this.handleChangeOntoStation}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" onChange={this.handleChangeOnDate} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" value="Submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default Search;