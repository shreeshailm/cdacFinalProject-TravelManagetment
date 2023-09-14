package com.app.controller;

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

import org.springframework.web.bind.annotation.RestController;



import com.app.entities.Hotel;

import com.app.service.HotelService;
import com.app.service.HotelServiceImpl;

@RestController
@RequestMapping("/hotel")
@CrossOrigin(origins = "*")
public class HotelController {

	@Autowired
	private HotelService hotelservice;
	
	@GetMapping
	public ResponseEntity<?> listAllHotel(){
		List<Hotel> list = hotelservice.getAllHotels();
		if(list == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("hotel/{userid}")
	public List<Hotel> getHotelDetailsByUserId(@PathVariable Long userid) {
		return hotelservice.getHotelDetailsByUser(userid);
	}


	@GetMapping("/{id}")
	public Hotel getHotelDetailsById(@PathVariable Long id) {
		return hotelservice.getHotelDetails(id);
	}
	
	@PutMapping("/{id}")
	public Hotel updateHotelDetails(@PathVariable Long id,@RequestBody Hotel tobeupdatedHotel) {
		return hotelservice.updateHotel(id,tobeupdatedHotel);
	}

	
	@PostMapping
	public Hotel saveHotel(@RequestBody Hotel hotel) {
		return hotelservice.addHotel(hotel);
	}
	

	@DeleteMapping("/{id}")
	public String deleteCustomer(@PathVariable Long id) {
		return hotelservice.deleteHotel(id);

		
		
	}
}
