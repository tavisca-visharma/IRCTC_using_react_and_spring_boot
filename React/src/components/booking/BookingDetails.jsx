import React, { Component } from 'react';
import { Table, Alert, Button } from 'react-bootstrap' 

class BookingDetails extends Component {

    constructor(props) {
        super(props);
    }

    state = {}


    submitPassengersDetails(){
        //API Call for adding passengers
    }

    render() {
        if (this.props.passengers.length > 0) {
            return (
                <div>
                    <br />
                    <Table>
                        <thead style={{ backgroundColor: "brown", color: "white" }}>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.passengers.map((passenger, index) =>
                                <tr key={index}>
                                    <td>{passenger.name}</td>
                                    <td>{passenger.age}</td>
                                    <td>{passenger.gender}</td>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                    <br />
                    <Button variant = "success" onClick = {() => this.submitPassengersDetails()}>Submit Passengers Details</Button>
                    {/* {console.log(this.props.berthsSelected)} */}
                </div>
            );
        }
        else {
            return (
                <div>
                    <br />
                    <Alert variant="danger"> <h5>No Passengers</h5> </Alert>
                </div>
            )
        }
    }
}

export default BookingDetails;