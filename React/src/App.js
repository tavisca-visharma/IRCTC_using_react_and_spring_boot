import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login'
import Train from './components/train/Train';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  NavigationBar  from './components/navBar/NavigationBar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Booking from './components/booking/Booking';
import Search from './components/search/Search'
import Timeline from './components/train/Timeline';
import BookingHistory from './components/booking/BookingHistory'

function App() {
  return (

    <div className="App">
      <NavigationBar />
      <br />
      <br />


      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/signup" component={SignUp} /> */}
          <Route path="/login" component={Login} />
          <Route path="/addTrain" component={Train} />
          <Route path="/booking" component={Booking} />
          <Route path="/search" component={Search} />
          {/* <Route path="/timeline" component={Timeline} /> */}
          <Route path="/bookingHistory" component={BookingHistory} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
