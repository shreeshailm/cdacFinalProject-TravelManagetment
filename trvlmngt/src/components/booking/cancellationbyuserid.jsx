import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl, log } from '../../utils/utils';
import { useUser } from '../context/UserContext';
import Navigation from '../../Navigate/Navigation';

function Cancelledbookingbyuseris() {
  const [bookings, setBookings] = useState([]);
  const { ...user } = useUser();
  useEffect(() => {

   const userid=user.userId;
log(user);
    axios.get( createUrl(`/cancellation/${userid}`))
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);



  return (
    <>
    <Navigation/>
     <div>
      <h2>Cancellation Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Booking Date</th>
            <th>Number of Persons</th>
            <th>Hotel Name</th>
            <th>Package Name</th>
           
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.cancellationId}>
              <td>{booking.cancellationId}</td>
              <td>{booking.cancellationDate}</td>
              <td>{booking.numberOfPersons}</td>
              <td>{booking.tourPackage.assignCities[0].assignhotel[0].hotelName}</td>
              <td>{booking.tourPackage.packageName}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
   
  );
}

export default Cancelledbookingbyuseris;
