import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap'
import SignUpModal from './SignUpModal'

function SignUp() {


    // state = {}

    const [modalShow, setModalShow] = React.useState(false); 

    console.log(modalShow,setModalShow)
    
        return (
            <ButtonToolbar>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Sign Up
                </Button>

                <SignUpModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
        );
    }


export default SignUp;