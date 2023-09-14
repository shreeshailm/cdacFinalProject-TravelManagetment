package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Inventoryhotel;

import com.app.repository.HotelInventoryRepository;


@Service
@Transactional
public class HotelInventoryServiceImpl implements HotelInventoryService {

	
	

	
	@Autowired
	 private HotelInventoryRepository hotelInventoryDao ;
	
//	@Override
//	public String addInventory(LocalDate Date, Integer availableRoom, Integer hotelId) {
//		
//		Inventoryhotel h= new Inventoryhotel();
//		h.setDate(Date);
//		h.setAvailableRoom(availableRoom);
//	//	h.setHotel(hotelId);
//		hotelInventoryDao.save(h);
//		
//		return "HotelInventory Added";
//	}

	@Override
	public String deleteInventory(Long id) {
		hotelInventoryDao.deleteById(id);
		return "Hotel Inventory deleted";
	}

	@Override
	public Inventoryhotel addInventory(Inventoryhotel inventory ) {
		
		
		// TODO Auto-generated method stub
		return hotelInventoryDao.save(inventory);
	}
	
	

	@Override
	public List<Inventoryhotel> getInventoryById(Long id) {
		
		
		return hotelInventoryDao.getInventoryByHotelId(id);
	}

	@Override
	public Inventoryhotel updateInventory(Long id, Inventoryhotel updatedInventory) {
        Inventoryhotel existingInventory = hotelInventoryDao.findById(id).orElse(null);

        if (existingInventory!=null) {

            return hotelInventoryDao.save(updatedInventory);
        } else {
            throw new EntityNotFoundException("Hotel Inventory with ID " + id + " not found.");
        }
    }
	
	@Override
	public Inventoryhotel findByDateAndHotelId(LocalDate date, Long hotelId) {
		// TODO Auto-generated method stub
		Inventoryhotel inventory= hotelInventoryDao.findByDateAndHotel_HotelId(date, hotelId);
		// Decrease the room count for each inventory item
      
            int currentRoomCount = inventory.getAvailableRoom();
            
            // Decrease the room count by the desired amount (e.g., 1)
            int decreaseAmount = 1;
            int newRoomCount = currentRoomCount - decreaseAmount;

            // Ensure the room count doesn't go below 0
            if (newRoomCount >= 0) {
                inventory.setAvailableRoom(newRoomCount);
                hotelInventoryDao.save(inventory);
            } 
            
            return inventory;
            
	}
	

}
