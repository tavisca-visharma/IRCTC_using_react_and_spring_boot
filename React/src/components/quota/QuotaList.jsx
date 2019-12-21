import React, { Component } from 'react';
import { Table,Alert } from 'react-bootstrap'

class QuotaList extends Component {

    constructor(props) {
        super(props)
    }

    state = {}
    render() {
        if (this.props.quotasSelected.length > 0) {
            return (
                <div>
                    <br />
                    <Table>
                        <thead style={{ backgroundColor: "brown", color: "white" }}>
                            <tr>
                                <th>Quota Type</th>
                                <th>No. of Seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.quotasSelected.map((quota, index) =>
                                <tr key = {index}>
                                    <td>{quota.quotaType}</td>
                                    <td>{quota.seats}</td>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                    {/* {console.log(this.props.quotasSelected)} */}
                </div>
            );
        }
        else {
            return (
                <div>
                    <br />
                    <Alert variant = "danger">No Quotas Selected</Alert>
                </div>
            )
        }
    }
}

export default QuotaList;