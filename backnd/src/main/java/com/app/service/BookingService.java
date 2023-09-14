package com.app.service;


import java.util.List;


import com.app.payload.AddBookingDto;
import com.app.entities.Booking;


public interface BookingService {
	
	Booking addBooking(AddBookingDto booking);

	List<Booking> getAllBookings();

	List<Booking>  getBookingByUserId(Long id);

	String deleteBooking(Long id);
	
	
}


