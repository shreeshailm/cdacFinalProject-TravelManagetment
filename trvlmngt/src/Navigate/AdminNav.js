import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

function AdminNavigation() {
    const history = useNavigate();
    const [AdminDtl] = useState({});

    const handleLogout = () => {
        history('/Logout');
    };

    const handleCity = () => {
        history("/Citylist");
    };

    const handleFeedback = () => {
        history("/AllFeedback");
    };

    return (
        <>
        <Navbar bg="secondary" expand="lg">
            <Container>
                {/* <Navbar.Brand as={Link} to="/ManagePackage">Project X</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Manage City" id="basic-nav-dropdown">
                             <NavDropdown.Item as={Link} to="/Citylist"> Manage Cities</NavDropdown.Item>                         
                        </NavDropdown>
                   <NavDropdown title="Package" id="basic-nav-dropdown">
                             <NavDropdown.Item as={Link} to="/AddPackage">  Add New Package</NavDropdown.Item>  
                             <NavDropdown.Item as={Link} to="/ManagePackage"> Manage Packages</NavDropdown.Item>                         
                    </NavDropdown>
                    <Nav.Link onClick={handleFeedback}>Feedbacks</Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default AdminNavigation;
