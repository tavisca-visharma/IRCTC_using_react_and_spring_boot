import React, { Component } from 'react';

class StationList extends Component {

    constructor(props){
        super(props);
    }

    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.stationsAdded.map((station,index) => <h2 key={index}>{station}</h2>)}
            </div>
         );
    }
}
 
export default StationList;