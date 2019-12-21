import React, { Component } from 'react';
import { Form, FormControl, Jumbotron, Container } from 'react-bootstrap'
import AddBooking from './AddBooking'
import BookingDetails from './BookingDetails'

class Booking extends Component {
    state = {
        passengers: []
    }

    addBooking(bookingValue) {
        let new_passengers = this.state.passengers
        new_passengers.push(bookingValue)
        this.setState({
            passengers: new_passengers
        })

        console.log("booking", this.state)
    }

    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h1>Book Tickets</h1>
                        <AddBooking onChange={(value) => this.addBooking(value)} />
                        <BookingDetails passengers={this.state.passengers} />
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default Booking;