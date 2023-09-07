

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUrl } from '../../utils/utils';
import { Link, useParams } from 'react-router-dom';


function Decreaseroomcnt() {
  const { hotelId } = useParams();
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(createUrl(`/hotelInventory/${hotelId}`))
      .then((response) => {
        setInventory(response.data);
        sessionStorage.setItem('hotelId', hotelId);
      })
      .catch((error) => {
        console.error('Error fetching inventory:', error);
      });
  }, [hotelId]);

  const decreapi = (date) => {
    
    axios
      .put(createUrl(`/hotelInventory/decreaseRoomCount?hotelId=${hotelId}&Strdate=${date}`))
      .then((response) => {
        // Handle the response data here
        console.log('Response:', response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>Choose your date for Hotel Booking</h1>

      <div className="row">
        {inventories.map((inventory) => (
          <div className="col-md-3" key={inventory.iventoryId}>
            <div className="card text-white bg-info mb-3" style={{ maxWidth: '30rem' }}>
              <div className="card-header">{inventory.date}</div>
              <div className="card-body">
                <h4 className="card-title">Room: {inventory.availableRoom}</h4>
                <Link className="btn btn-outline-success" to={`/payment`} onClick={() => decreapi(inventory.date)}>Book</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Decreaseroomcnt;



