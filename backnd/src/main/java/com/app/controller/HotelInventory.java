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

import com.app.entities.*;
import com.app.service.HotelInventoryService;
@RestController
@RequestMapping("/hotelInventory")
@CrossOrigin(origins = "*")
public class HotelInventory {

	@Autowired
	private HotelInventoryService hotelInventoryService;


//	@PostMapping
//	public String addHotelInventory(@RequestBody LocalDate date, @RequestParam("hotelId") Integer hotelId,
//			@RequestParam("availrooms") Integer availrooms) {
//
//		return hotelInventoryService.addInventory(date, availrooms, hotelId);
//	}
	@GetMapping("/{hotelId}")
	public ResponseEntity<List<Inventoryhotel>> getInventoryByHotelId(@PathVariable Long hotelId) {
        List<Inventoryhotel> inventoryList = hotelInventoryService.getInventoryById(hotelId);
        
        
        if (inventoryList == null || inventoryList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
        
        return new ResponseEntity<>(inventoryList, HttpStatus.OK);
    }
	

	 @PutMapping("/{id}")
	    public ResponseEntity<Inventoryhotel> updateInventory(@PathVariable Long id, @RequestBody Inventoryhotel updatedInventory) {
	        Inventoryhotel updated = hotelInventoryService.updateInventory(id, updatedInventory);
	        return ResponseEntity.ok(updated);
	    }
	
	//changed here for inventory
	 @PostMapping
		public Long addHotel(@RequestBody Inventoryhotel inventory){
		hotelInventoryService.addInventory(inventory);
			return hotelInventoryService.addInventory(inventory).getIventoryId();
		}

	@DeleteMapping("/{id}")
	public String deleteCustomer(@PathVariable Long id) {
		return hotelInventoryService.deleteInventory(id);

	}
	
	 @PutMapping("/decreaseRoomCount")
	    public void decreaseRoomCount(@RequestParam Long hotelId, @RequestParam String Strdate) {
	        // Find the inventory for the specified hotelId and date
		LocalDate date= LocalDate.parse(Strdate);
		 Inventoryhotel inventory = hotelInventoryService.findByDateAndHotelId(date, hotelId);        
}
}
