package com.app.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.payload.AddBookingDto;
import com.app.dto.AddFeedback;
import com.app.entities.Booking;
import com.app.entities.User;
import com.app.entities.Feedback;
import com.app.entities.Hotel;
import com.app.entities.Inventoryhotel;
import com.app.entities.TourPackage;
import com.app.service.BookingService;
import com.app.service.HotelInventoryService;
import com.app.service.HotelService;
import com.app.service.TourPackageService;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "*")
public class BookingController {

	@Autowired
	private BookingService bookingService;

	@GetMapping
	public List<Booking> getAllBookings() {
		return bookingService.getAllBookings();
	}

	@GetMapping("/{id}")
	public List<Booking> getBookingByUserId(@PathVariable Long id) {

		return bookingService.getBookingByUserId(id);
	}

	@DeleteMapping("/{bookingid}")
	public void deleteBooking(@PathVariable Long bookingid) {

		bookingService.deleteBooking(bookingid);

	}

	@PostMapping
	public Booking addBooking(@RequestBody AddBookingDto booking) {
		return bookingService.addBooking(booking);
	}

}
