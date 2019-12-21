import React, { Component } from 'react';
import { Dropdown, Jumbotron, Button } from 'react-bootstrap'
import BerthList from './BerthList.jsx'

class AddBerth extends Component {
    state = {

        selectedBerthType: "Select Berth Type",
        selectedCountOfBerths: 0,

        berthTypes: [
            "AC-1", "AC-2", "AC-3", "SLEEPER"
        ],
        berthsSelected: []
    }

    selectBerth(event, berth) {
        // console.log("event", event)
        // console.log(berth.berthType);
        
        this.setState({
            selectedBerthType: berth.berthType
        })

    }

    selectCount(event) {
        console.log("count = ", event.target.value)
        this.setState({
            selectedCountOfBerths: event.target.value
        })
    }


    addBerth(event) {
        let berthType = this.state.selectedBerthType
        let seats = this.state.selectedCountOfBerths
        console.log(seats)
        if (berthType === "Select Berth Type" || seats === 0)
            return;

        let flag = false
        let newBerthsSelected = this.state.berthsSelected
        for (let i in newBerthsSelected) {
            if (berthType === newBerthsSelected[i].berthType) {
                newBerthsSelected[i].seats = seats
                flag = true
                console.log("Hello")
            }
        }
        if (flag === false) {
            console.log("world")
            newBerthsSelected.push({
                berthType,
                seats
            })
        }
        this.setState({
            berthsSelected: newBerthsSelected
        })
        if (typeof this.props.onChange === 'function') {
            this.props.onChange({ berthType, seats });
        }
    }

    render() {
        return (
            <div>
                <Jumbotron style={{ backgroundColor: "whitesmoke" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-berth">
                            {this.state.selectedBerthType}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {this.state.berthTypes.map((berthType, index) =>
                                <Dropdown.Item key={index} eventKey = "0" onSelect={(event) => this.selectBerth(event,{berthType})}> {berthType} </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <br />
                    <label>No. Of Seats : </label> &nbsp;
                    <input id="no_of_seats" type="number" min="0" required onBlur={(event) => this.selectCount(event)} /> <br />&nbsp;
                    <Button variant="primary" onClick={(event) => this.addBerth(event)}>Add Berth</Button>


                    <BerthList berthsSelected={this.state.berthsSelected} />

                </Jumbotron>

            </div>
        );
    }
}

export default AddBerth;