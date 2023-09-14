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
import com.app.entities.Cancellation;
import com.app.entities.User;
import com.app.entities.Feedback;
import com.app.entities.Hotel;
import com.app.entities.Inventoryhotel;
import com.app.entities.TourPackage;
import com.app.service.BookingService;
import com.app.service.CancellationService;
import com.app.service.HotelInventoryService;
import com.app.service.HotelService;
import com.app.service.TourPackageService;

@RestController
@RequestMapping("/cancellation")
@CrossOrigin(origins = "*")
public class CancellationController {

	@Autowired
	private CancellationService cancellationService;


    @GetMapping
    public List<Cancellation> getAllCancellation() {
        return cancellationService.getAllCancellation();
    }

	  @GetMapping("/{id}")
    public List<Cancellation> getCancellationByUserId(@PathVariable Long id) {
		  
        return cancellationService.getCancellationByUserId(id);
    }
	
	
	
		
		
	
}

