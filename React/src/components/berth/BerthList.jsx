import React, { Component } from 'react';
import { Table,Alert } from 'react-bootstrap'

class BerthList extends Component {

    constructor(props) {
        super(props)
    }

    state = {}
    render() {
        if (this.props.berthsSelected.length > 0) {
            return (
                <div>
                    <br />
                    <Table>
                        <thead style={{ backgroundColor: "brown", color: "white" }}>
                            <tr>
                                <th>Berth Type</th>
                                <th>No. of Seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.berthsSelected.map((berth, index) =>
                                <tr key = {index}>
                                    <td>{berth.berthType}</td>
                                    <td>{berth.seats}</td>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                    {/* {console.log(this.props.berthsSelected)} */}
                </div>
            );
        }
        else {
            return (
                <div>
                    <br />
                    <Alert variant = "danger">No Berths Selected</Alert>
                </div>
            )
        }
    }
}

export default BerthList;