import React, { Component } from 'react';
import { Image } from 'react-bootstrap'


class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Welcome to the IRCTC</h1>
                <Image src={process.env.PUBLIC_URL + '/assets/train_logo.png'} alt="train_logo" width="140" height="140" roundedCircle />
                <br />
            </div>
        )
    }
}

export default Home;