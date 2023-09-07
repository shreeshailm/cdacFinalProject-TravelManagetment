import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AllFeedback from "./Feedback/AllFeedback";

import goa from "../Common/goa.jpeg"
import manali from "../images/manali.jpg";
import manipur from "../images/manipur.jpg";




function Home() {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        };


    return ( <>
      

<center>
 
      
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={900} style={{height:'400px'}}>
       <img src={goa} style={{width:'800px',height:'400px'}}></img>
        <Carousel.Caption>
          <h3>Goa Is on!!! </h3>
          <p> Small state on the west coast is known for its beautiful beaches, rich cultural heritage, and nightlife</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900} style={{height:'400px'}}>
      
      <img src={manali} style={{width:'800px',height:'400px'}}></img>
        <Carousel.Caption>
          <h3>Manali is calling</h3>
          <p>A picturesque hill station located in the northern Indian state of Himachal Pradesh</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900} style={{height:'400px'}}>
      <img src={manipur} style={{width:'800px',height:'400px'}}></img>
        <Carousel.Caption>
           <h3>Welcome to Manipur</h3>
          <p>
          Manipur is a mosaic of ancient traditions and rich cultural patterns
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    
    </center> 



       
    <br></br><br></br><br></br><br></br>
<AllFeedback></AllFeedback>
        
        <br></br><br></br><br></br><br></br>
<div>
<footer class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4>Head Office</h4>
        <p>phase 4 hinjewadi</p>
      </div>
      <div class="col-md-4">
        <h4>Contact Us</h4>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@info.com</p>
      </div>
      <div class="col-md-4">
        <h4>Website Designer</h4>
        <p>Designed by: Project</p>
        <p>Contact: designer@info.com</p>
      </div>
    </div>
  </div>
</footer>

</div>

      </>);
}

export default Home;


