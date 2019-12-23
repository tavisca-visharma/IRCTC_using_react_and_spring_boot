import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import Search from '../components/search/Search'


class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Welcome to the IRCTC</h1>
                <Image src={process.env.PUBLIC_URL + '/assets/train_logo.png'} alt="train_logo" width="140" height="140" roundedCircle />
                <br />
                <br />

                <Search />
            </div>
        )
    }
}

export default Home;