import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { createUrl } from '../../utils/utils';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function HotelInfo() {

    const { ...user } = useUser();

  // State to store the fetched data
  const [hotelData, setHotelData] = useState([]);


  
  useEffect(() => {
    // Get the userId from sessionStorage
   // const userId = sessionStorage.getItem('userId');
    const userId=user.userId;
    // Make the API call using Axios
    axios.get(createUrl(`/hotel/hotel/${userId}`))
      .then(response => {
        setHotelData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array ensures that this effect runs only once, like componentDidMount

  return (<>
  <h1>{user.userName}, your Hotel</h1>
  <br></br>
    <Container>
    <h1 className="mt-5 mb-4">Hotel Information</h1>
    <Row>
      {hotelData.map((hotel, index) => (
        <Col key={index} md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{hotel.hotelName}</Card.Title>
              
              <Card.Text>{hotel.hotelDescription}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">{hotel.hotelAddress}</Card.Subtitle>
              <Link to={`/hotelInventory/${hotel.hotelId}`} className="btn btn-primary">See Inventory</Link>&nbsp;
              <Link to={`/hotelupdate/${hotel.hotelId}`} className="btn btn-warning">update hotel details</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
  </Container>

  <Link to='/addhotel'> Add more hotels</Link>
    
  </>
  );
}

export default HotelInfo;
