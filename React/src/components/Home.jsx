import React, { Component } from 'react';
import SignUp from './signup/SignUp';
import Login from './login/Login'
import AddTrain from './train/AddTrain';
import { Image } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './navBar/NavigationBar'
import About from './about/About'
import Contact from './contact/Contact'
import Booking from './booking/Booking';
import Search from './search/Search'

class Home extends Component {
    state = {}
    render() {
        return (

            <div>
                <NavigationBar />
                <header>
                    <h1>Welcome to the IRCTC</h1>
                    <Image src={process.env.PUBLIC_URL + '/assets/train_logo.png'} alt="train_logo" width="140" height="140" roundedCircle />
                    <br />
                </header>
                <main>

                    <Router>
                        <Switch>

                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/login" component={Login} />
                            <Route path="/addTrain" component={AddTrain} />
                            <Route path="/booking" component={Booking} />
                            <Route path="/search" component={Search} />


                        </Switch>
                    </Router>
                </main>
                <footer>
                    <b><i>&copy; Team</i></b>
                </footer>
            </div>
        );
    }
}

export default Home;