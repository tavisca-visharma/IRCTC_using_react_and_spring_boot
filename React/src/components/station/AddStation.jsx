import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import StationList from './StationList'

class AddStation extends Component {
    state = { 
        stationName : undefined,
        stationsAdded : []
     }

     addStationName(event){
         this.setState({
             stationName : event.target.value
         })
     }

     addStation(event){
        let newStationsAdded = this.state.stationsAdded
        let station = this.state.stationName
        newStationsAdded.push(station)
        this.setState({
            stationsAdded : newStationsAdded
        })

        if (typeof this.props.onChange === 'function') {
            this.props.onChange({station});
        }
     }

    render() { 
        return ( 
            <div>
                <Jumbotron style={{ backgroundColor: "whitesmoke" }}>
                    <label htmlFor="stationName">Station Name : </label> &nbsp;
                    <input type="text" placeholder = "Enter Station Name" onBlur = {(event) => this.addStationName(event)}/> <br/>
                    <Button variant="danger" onClick = {(event) => this.addStation(event)}>Add Station</Button>
                    
                    
                    <StationList stationsAdded = {this.state.stationsAdded}/>

                </Jumbotron>
            </div>
         );
    }
}
 
export default AddStation;