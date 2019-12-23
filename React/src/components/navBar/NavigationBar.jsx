import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

import SignUpModal from '../signup/SignUpModal'
import Timeline from '../train/Timeline'

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;
class NavigationBar extends Component {
  
  state = {

    showSignupModal : false,
    showTimelineModal : false

  }

  openSignupModal(){
    this.setState({
      showSignupModal : true
    })
  }

  closeSignupModal(){
    this.setState({
      showSignupModal : false
    })
  }
  


  openTimelineModal(){
    this.setState({
      showTimelineModal : true
    })
  }

  closeTimelineModal(){
    this.setState({
      showTimelineModal : false
    })
  }
  
  render() {
    return (<Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">IRCTC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/booking">Booking</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/addTrain">Add Train</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick = {() => this.openTimelineModal()} className="inactive" >Timeline</Nav.Link>
              <Timeline show = {this.state.showTimelineModal} onHide = {() => this.closeTimelineModal()} />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/bookingHistory">History</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick = {() => this.openSignupModal()} className="inactive" >Sign Up</Nav.Link>
              <SignUpModal show = {this.state.showSignupModal} onHide = {() => this.closeSignupModal()} />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    );
  }
}

export default NavigationBar;
