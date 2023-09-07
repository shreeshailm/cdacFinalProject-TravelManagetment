

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useUser } from "../context/UserContext";



function Nami() {


const navigate=useNavigate();
    const { ...user } = useUser();

    const { logout } = useUser();

const home=()=>{
    navigate("/");
}

    if(user.userId!=null){
        return (<>
            <div className="d-flex align-items-center justify-content-center" >
            <div className="logo">
            <img src="/images/logo.jpeg" alt="EaseMytrip Logo" className="rounded-circle" width="100" height="100"  onClick={home}  style={{marginRight:50}}/>
                </div>

                <div>
                   <h1> Make your travel Easy with Us!!</h1>
                </div>
                <div className="d-flex align-items-center ms-auto">
                    
                  <img src="/images/Cover-minions.png" alt="User Profile" className="rounded-circle" height="50"
                   />
                
                </div>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >Collect moments, not things.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/aboutus">About Us</Link>&nbsp;
                            <Link className="nav-link" to="/contactus">Contact Us</Link>&nbsp;
                            <Link className="nav-link" to="/asktoaddhotel">Have A Hotel?</Link>&nbsp;
                            <Link className="nav-link" to="/AllPackage">See Our TourPackages</Link>&nbsp;
                        </Nav>
    
                    </Navbar.Collapse>
                    <Link className="nav-link" to="/profile"> My Profile</Link>&nbsp;
                        <Link className="btn btn-danger" to="/" onClick={logout}  >Logout</Link>
                
                       
    
    
                </Container>
            </Navbar>
        </>
    
        );
    }
    else{
        return (<>
            <div className="d-flex align-items-center justify-content-center" >
                <div className="logo">
                    <img src="/images/logo.jpeg" alt="EaseMytrip Logo" className="rounded-circle" width="100" height="100"  onClick={home}  style={{marginRight:50}}/>
                </div>
                <div>
                    <center><h1>Make your travel Easy with Us!!</h1></center>
                </div>
                <div className="d-flex align-items-center ms-auto">
                    <img src="/images/Cover-minions.png" alt="User Profile" className="rounded-circle" height="50" />
                </div>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >Collect moments, not things.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/aboutus">About Us</Link>&nbsp;
                            <Link className="nav-link" to="/contactus">Contact Us</Link>&nbsp;
                            <Link className="nav-link" to="/asktoaddhotel">Have A Hotel?</Link>&nbsp;
                            <Link className="nav-link" to="/AllPackage">See Our TourPackages</Link>&nbsp;
                        </Nav>
    
                    </Navbar.Collapse>
    
                       
                
                        <Link className="btn btn-primary" to="/login" variant="primary">LogIn</Link>
                   
    
    
                </Container>
            </Navbar>
            <br></br><br></br>
        </>
    
        );
    }
   
}

export default Nami;
