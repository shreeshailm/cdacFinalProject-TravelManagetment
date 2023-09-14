package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Hotel;



public interface HotelRepository extends JpaRepository<Hotel, Long> {

	List<Hotel> findAllByUserId(Long userId);
}
