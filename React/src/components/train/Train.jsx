import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'

import AddTrain from './AddTrain'
import TrainList from './TrainList'

class Train extends Component {
    state = {}
    render() {
        return (
            <div>
                <Accordion >
                    <Accordion.Toggle  style = {{ marginLeft: "30px", float : "left"}} as={Button} variant="success" eventKey="0">
                        Add Train
                        </Accordion.Toggle>
                        <br />
                        <br />
                    <Accordion.Collapse eventKey="0">
                        <AddTrain />
                    </Accordion.Collapse>
                </Accordion>

                <TrainList />
            </div>
        );
    }
}

export default Train;