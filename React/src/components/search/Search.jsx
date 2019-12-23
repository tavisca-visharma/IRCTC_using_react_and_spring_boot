import React, { Component } from "react";
import { Row, Col, Form, Button, Jumbotron, Container } from "react-bootstrap";
import TrainList from '../train/TrainList'


const IP_ADDRESS = ""

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromStation: undefined,
      toStation: undefined,
      trains: [],
      date: undefined,
      formSubmitted: false
    };

    this.handleChangeOnfromStation = this.handleChangeOnfromStation.bind(this);
    this.handleChangeOntoStation = this.handleChangeOntoStation.bind(this);
    this.handleChangeOnDate = this.handleChangeOnDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  apiCallForSearch() {
    // In this function full train details will be fetched including the timeline
    // which contains stops and their arrival and departure time
    // also seat availability and seats per quota will also be there


    // let payload = {

    //   from: this.state.fromStation,
    //   to: this.state.toStation,
    //   date: this.state.date
    // }

    // console.log(payload)
    fetch(IP_ADDRESS + "/searchTrains/" + this.state.fromStation + "/" + this.state.toStation, {
      method: 'get',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      // body: payload
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          trains: data
        })
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
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
    this.setState({
      formSubmitted: true
    })

    this.apiCallForSearch();
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Search Trains</h1>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="fromStation">
                  <Form.Label> <h5>From</h5> </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="From"
                    onChange={this.handleChangeOnfromStation}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="toStation">
                  <Form.Label> <h5>To</h5> </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="To"
                    onChange={this.handleChangeOntoStation}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="date">
                  <Form.Label> <h5>Date</h5> </Form.Label>
                  <Form.Control type="date" onChange={this.handleChangeOnDate} required />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" value="Submit">
              Search
            </Button>
          </Form>
        </Jumbotron>
        <br />
        <TrainList isSubmitted={this.state.formSubmitted}
          source={this.state.fromStation}
          destination={this.state.toStation}
          trains={this.state.trains}
        />
      </Container>
    );
  }
}

export default Search;
