package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.entities.Inventoryhotel;

public interface HotelInventoryService {
	
	Inventoryhotel updateInventory(Long id, Inventoryhotel inventory );
	
	Inventoryhotel addInventory(Inventoryhotel inventory );
	
	List<Inventoryhotel> getInventoryById(Long id);
	
	String deleteInventory(Long id);
	
	Inventoryhotel findByDateAndHotelId(LocalDate date, Long hotelId);
}
