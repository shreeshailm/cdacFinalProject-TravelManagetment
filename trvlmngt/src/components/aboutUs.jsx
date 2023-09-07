
import React from 'react';
import "./style.css";

import { Link } from 'react-router-dom';


function AboutUs() {
  return (
    
    <div className="about-us-container">
      <h1 className="about-us-header">About Us</h1>
      <p className="about-us-content">
        Welcome to Our Travel Management Company
      </p>
      <hr></hr>
      <br></br><br></br>
      <p className="about-us-content">
        We are a dedicated team of travel enthusiasts committed to providing
        you with unforgettable travel experiences. With years of experience and
        a passion for exploring the world, we curate the best travel packages
        just for you.
      </p>
      <p className="about-us-content">
        Our packages include pre-booked hotels, exciting excursions, and
        personalized itineraries. Whether you're an adventure seeker, a
        relaxation lover, or a culture explorer, we have something for
        everyone.
      </p>
      <p className="about-us-content">
        Contact us today to start planning your dream vacation. Let's make your
        travel dreams come true!
      </p>

      <img src="/images/logo.jpeg" alt="Company logo" className="about-us-image" />
      <br></br><h1></h1>
      <Link to="/">Back to Home</Link>
    </div>

     
  );
}

export default AboutUs;
