package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

	
	@Query(value = "SELECT * FROM booking WHERE user_id = :userId", nativeQuery = true)
    List<Booking> findByUserId(@Param("userId") Long userId);
	
}


