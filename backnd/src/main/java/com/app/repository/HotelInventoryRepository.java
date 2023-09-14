package com.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.app.entities.Inventoryhotel;



public interface HotelInventoryRepository extends JpaRepository<Inventoryhotel, Long> {

	 @Query("SELECT i FROM Inventoryhotel i WHERE i.hotel.id = :hotelId")
	    List<Inventoryhotel> getInventoryByHotelId(@Param("hotelId") Long hotelId);
	
	 @Query("SELECT i FROM Inventoryhotel i WHERE i.Date = :date AND i.hotel.id = :hotelId")
	 Inventoryhotel findByDateAndHotel_HotelId(@Param("date") LocalDate date, @Param("hotelId") Long hotelId);

}
