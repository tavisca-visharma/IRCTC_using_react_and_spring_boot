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
        let flag = false
        for (let i in new_passengers) {
            if (new_passengers[i].name === bookingValue.name && new_passengers[i].age === bookingValue.age) {
                new_passengers[i].gender = bookingValue.gender
                flag = true
            }
        }

        if (flag === false){
        new_passengers.push(bookingValue)
        }
        this.setState({
            passengers: new_passengers
        })

        console.log("booking", this.state)
    }

    render() {
        console.log("props", this.props.location.state)
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