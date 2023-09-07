import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { createUrl } from '../../utils/utils';
import { config } from '../../utils/constants';
import Navigation from '../../Navigate/Navigation';

function GetAllHotelForUser() {

  const {pid} = useParams();
  const [hotels, setHotels] = useState([]);
  const url = createUrl('/tourpackage')
  const USERID=sessionStorage.getItem("userId");
  const bookUrl=createUrl('/booking')

  const addBooking=async()=>{
    debugger;
        const body=
        {
                "tourPackageId": pid,
                "userId": USERID,
                "numberOfPerson": 1,
                "price": 10000
        }
          
        axios.post(`${bookUrl}`,body,config)
        .then(()=>{
            console.log("booking added successfull")
            //navigate(`/getttt/${ppid}`)
        }).catch((error)=>
        {
            console.log("booking failure")
        })
        debugger;

}
  useEffect(() => {
    debugger;
    // addBooking();
    axios.get(`${url}/hotels/${pid}`,config)
    .then((response) => {
      console.log('Printing city data', response.data);
      setHotels(response.data);
    })
    .catch((error) => {
      console.log('Something went wrong', error);
    });
      debugger;
  }, []);

  
  return (
    <>
    <div>
      <Navigation/>
    </div>
    <div className="container" style={{marginTop:30}}>
      <center><h2>Select a Hotel</h2></center>
      <div className="row" style={{marginTop:30}}>
        {hotels.map((hotel) => (
          <div className="col-md-3" key={hotel.hotelId}>
            <div className="card  bg-light mb-3" style={{ maxWidth: '30rem' }}>
              <div className="card-header" style={{ color: 'black'}}>{hotel.hotelName}</div>
              <div className="card-body">
                
               <h6><p className="card-text">Description: {hotel.hotelDescription}</p>
                <p className="card-text">Address: {hotel.hotelAddress}</p></h6> 
                
                <center>
                  <br></br>
                <h6><Link  to={`/decc/${hotel.hotelId}`}>Choose Date</Link></h6>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default GetAllHotelForUser;


