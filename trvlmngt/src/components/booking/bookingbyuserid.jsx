import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl, log } from '../../utils/utils';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../Navigate/Navigation';

function Bookingbyuserid() {
  const [bookings, setBookings] = useState([]);
  const { ...user } = useUser();

  const navigate=useNavigate();
  useEffect(() => {

   const userid=user.userId;

    axios.get( createUrl(`/booking/${userid}`))
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleCancel = (bookingId) => {
    axios.delete( createUrl(`/booking/${bookingId}`))
    .then((response) => {
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.bookingId !== bookingId)
          );
    // navigate('/getbookingbyuserid');
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  };

  return (
    

   <>
   <Navigation/>
    <div class="mx-3">
      <h2>Booking Information</h2>
      <table className="table" >
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Booking Date</th>
            <th>Number of Persons</th>
            <th>Hotel Name</th>
            <th>Package Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.numberOfPersons}</td>
              <td>{booking.tourPackage.assignCities[0].assignhotel[0].hotelName}</td>
              <td>{booking.tourPackage.packageName}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCancel(booking.bookingId)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  );
}

export default Bookingbyuserid;
