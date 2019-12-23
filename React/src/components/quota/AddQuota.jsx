import React, { Component } from 'react';
import { Dropdown, Jumbotron, Button } from 'react-bootstrap'
import QuotaList from './QuotaList'

class AddQuota extends Component {
    
    state = {

        selectedQuotaType: "Select Quota Type",
        selectedCountOfQuotas: 0,

        quotaTypes: [
            "Defense", "Eminent Personalities", "Physically Handicapped"
        ],
        quotasSelected: []
    }

    selectQuota(event, quota) {
        // console.log(event);
        this.setState({
            selectedQuotaType: quota.quotaType
        })

    }

    selectCount(event) {
        console.log("count = ", event.target.value)
        this.setState({
            selectedCountOfQuotas: event.target.value
        })
    }


    addQuota(event) {
        let quotaType = this.state.selectedQuotaType
        let seats = this.state.selectedCountOfQuotas
        console.log(seats)
        if (quotaType === "Select Quota Type" || seats === 0)
            return;

        let flag = false
        let newQuotasSelected = this.state.quotasSelected
        for (let quota in newQuotasSelected) {
            if (quotaType === newQuotasSelected[quota].quotaType) {
                newQuotasSelected[quota].seats = seats
                flag = true
            }
        }
        if (flag === false) {
            newQuotasSelected.push({
                quotaType,
                seats
            })
        }
        this.setState({
            quotasSelected: newQuotasSelected
        })
        if (typeof this.props.onChange === 'function') {
            this.props.onChange({ quotaType, seats });
        }
    }

    render() { 
        return ( 
            <div>
                <Jumbotron style={{ backgroundColor: "whitesmoke" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-quota">
                            {this.state.selectedQuotaType}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {this.state.quotaTypes.map((quotaType, index) =>
                                <Dropdown.Item key={index} eventKey = "0" onSelect={(event) => this.selectQuota(event, {quotaType})}> {quotaType} </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <br />
                    <label> <h5>No. Of Seats :</h5>  </label> &nbsp;
                    <input id="no_of_seats_of_quota" type="number" min="0" required onBlur={(event) => this.selectCount(event)} /> <br />&nbsp;
                    <Button variant="primary" onClick={(event) => this.addQuota(event)}>Add Quota</Button>


                    <QuotaList quotasSelected={this.state.quotasSelected} />

                </Jumbotron>

            </div>
         );
    }
}
 
export default AddQuota;