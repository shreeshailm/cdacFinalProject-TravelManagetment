package com.app.service;


import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.app.entities.Hotel;
import com.app.repository.HotelRepository;



@Service
@Transactional
public class HotelServiceImpl implements HotelService {
	
	@Autowired
	 private HotelRepository hoteldao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<Hotel> getAllHotels() {
		return hoteldao.findAll();
	}

	@Override
	public Hotel getHotelDetails(Long hotelId) {
		// TODO Auto-generated method stub
		return hoteldao.findById(hotelId).orElseThrow();
	}
	
	@Override
	public Hotel updateHotel(Long id, Hotel tobeupdatedHotel) {
		Hotel hh= hoteldao.findById(id).orElseThrow();
		mapper.map(tobeupdatedHotel,hh);
		hh.setHotelId(id);
		
		return mapper.map(hh, Hotel.class);
	}


	@Override
	public String deleteHotel(Long id) {
		Hotel hh= hoteldao.findById(id).orElseThrow();
		hoteldao.delete(hh);
		return "Hotel deleted sucessfully";
	}


	@Override
	public Hotel addHotel(Hotel hotel) {

		return hoteldao.save(hotel);
	}

	@Override
	public List<Hotel> getHotelDetailsByUser(Long userid) {
		
		return hoteldao.findAllByUserId(userid);
	}



	

	
}
