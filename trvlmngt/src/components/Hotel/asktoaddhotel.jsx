
import "../style.css";
import { Link } from 'react-router-dom';
import im from '../../logo.svg'
import { Carousel } from "react-bootstrap";



function AskToAddHotel() {

   

    return ( <>
    
    
    <div className="about-us-container">
  
      <h3 className="about-us-header">Welcome to Our Travel Management Website</h3>
      <hr></hr><br></br><br></br>
      <p className="about-us-content">
        Are you a hotel owner looking to showcase your property to travelers
        worldwide? Join our platform and reach a global audience.
      </p>
      <p className="about-us-content">
        By adding your hotel to our website, you can increase your visibility,
        attract more guests, and grow your business.
      </p>
      <Link to="/registerhotelowner" className="btn btn-primary">
         Click here to add your hotel to
        our platform.
      </Link>
    </div>
    <h4> Our Partners Hotels</h4> 
  <div  style={{ display: 'flex', justifyContent: 'center' }} > 
      <Carousel>
      <Carousel.Item interval={1500}>
        <img src={im}></img>
      </Carousel.Item><Carousel.Item interval={1500}>
        <img src={im}></img>
      </Carousel.Item><Carousel.Item interval={1500}>
        <img src={im}></img>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img src={im}></img>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img src={im}></img>
      </Carousel.Item>
      </Carousel>
      
      </div>
    </>);
}

export default AskToAddHotel;
