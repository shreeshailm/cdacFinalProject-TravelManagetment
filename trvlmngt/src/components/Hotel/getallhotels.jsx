import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { createUrl } from '../../utils/utils';
import { toast } from 'react-toastify';

function GetAllHotels() {
  const [hotels, setHotels] = useState([]);
  const {ccid} = useParams();
  useEffect(() => {
    axios
      .get(createUrl('/hotel'))
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const assign = ((iid)=>{
    axios.post(createUrl(`/city/${ccid}/hotel/${iid}`))
    .then(()=>{
      toast.success('Hotel Assigned successfully');
    })
})
  return (
    <div className="container">
      <h1>Hotel List</h1>
      <div className="row">
        {hotels.map((hotel) => (
          <div className="col-md-3" key={hotel.hotelId}>
            <div className="card  bg-light mb-3" style={{ maxWidth: '30rem' }}>
              <div className="card-header" style={{ color: 'black'}}>{hotel.hotelId}</div>
              <div className="card-body">
                <h4 className="card-title">Name: {hotel.hotelName}</h4>
               <h5><p className="card-text">Description: {hotel.hotelDescription}</p>
                <p className="card-text">Address: {hotel.hotelAddress}</p></h5> 
                
                <center>
                
                <h6><Link  to={`/hotelInventory/${hotel.hotelId}`}>Get inventory</Link></h6>
                <h6><Link to={`/Citylist`} onClick={()=>{assign(hotel.hotelId)}}>Assign Hotel</Link></h6>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllHotels;


