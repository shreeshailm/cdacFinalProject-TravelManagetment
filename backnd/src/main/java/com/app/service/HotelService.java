package com.app.service;



import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.entities.Hotel;




public interface HotelService {
	
	List<Hotel> getAllHotels();

	Hotel getHotelDetails(Long hotelId);
	
	Hotel addHotel(Hotel hotel);
	
//	String addHotel( MultipartFile file ,String hotelName,String hotelAddress,
//			Integer hotelCityId,Double hotelPrice,boolean hotelActive);
//	
	
	Hotel updateHotel(Long id, Hotel tobeupdatedHotel);
	
	String deleteHotel(Long id);

	List<Hotel> getHotelDetailsByUser(Long userid);
}
