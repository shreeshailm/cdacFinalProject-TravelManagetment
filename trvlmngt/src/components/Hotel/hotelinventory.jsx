

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { createUrl } from '../../utils/utils';

function HotelInventory() {
  const { hotelId } = useParams();
  

  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(createUrl(`/hotelInventory/${hotelId}`))
      .then((response) => {
        setInventory(response.data);
        sessionStorage.setItem('hotelId',hotelId);
      })
      .catch((error) => {
        console.error('Error fetching inventory:', error);
      });
  }, [hotelId]);

  return (
    <div className="container">
      <h1>Your Inventory </h1>

      <div className="row">
        {inventories.map((inventory) => (
          <div className="col-md-3" key={inventory.iventoryId}>
            <div className="card text-white bg-info mb-3" style={{ maxWidth: '30rem' }}>
              <div className="card-header">{inventory.date}</div>
              <div className="card-body ">
                <h4 className="card-title">Room: {inventory.availableRoom}</h4>
                <p className="card-text">Description: {inventory.roomPrice}</p>
                
              </div>
            </div>

          </div>

         

        ))

        }
      </div>
      <div>
        <br></br><br></br><br></br>
          <h3> Want to add inventory? </h3>
          <Link className='btn btn-primary' to='/addhotelinventory'> Add here</Link>

            </div>


    </div>


  );
}

export default HotelInventory;
