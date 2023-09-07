import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

function Navigation() {
    const history = useNavigate();
   
    const handleBooking = () => {
        history("/AllPackage");
    };


    const handleFeedback = () => {
        history("/Feedback");
    };
    const getbooking = () => {
        history("/getbookingbyuserid");
    };
    const getcancellation = () => {
        history("/getcancellationbyuserid");
    };



    return (
        <Navbar bg="light" expand="lg">
            <Container>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link onClick={handleBooking}>Book new package</Nav.Link>
                        <Nav.Link onClick={handleFeedback}>Add Feedback</Nav.Link>
                       
                        <Nav.Link onClick={getbooking}>Show My Bookings</Nav.Link>  
                        <Nav.Link onClick={getcancellation}>Show My Cancellation</Nav.Link>  
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
