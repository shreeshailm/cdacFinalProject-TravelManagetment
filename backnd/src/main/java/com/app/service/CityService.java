package com.app.service;



import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.dto.AddCity;
import com.app.dto.AddTourPackage;
import com.app.entities.City;
import com.app.entities.TourPackage;






public interface CityService {
	
	
	List<City> getAllCity();
	City addCity(AddCity city);
	String deleteCity(Long cityId);
	City assignHotelToCity(Long cityId ,Long hotelId);
	City getCityById(Long id);
	City updateCity(Long cityId, City city);
}
