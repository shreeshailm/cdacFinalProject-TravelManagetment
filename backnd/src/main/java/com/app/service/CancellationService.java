package com.app.service;


import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.payload.AddBookingDto;
import com.app.dto.AddCity;
import com.app.dto.AddTourPackage;
import com.app.entities.Booking;
import com.app.entities.Cancellation;
import com.app.entities.City;
import com.app.entities.TourPackage;


public interface CancellationService {
	
	

	List<Cancellation> getAllCancellation();

	List<Cancellation>  getCancellationByUserId(Long id);


	
}

