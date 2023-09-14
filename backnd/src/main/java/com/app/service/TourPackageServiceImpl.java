package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AddTourPackage;
import com.app.entities.City;
import com.app.entities.Hotel;
import com.app.entities.TourPackage;
import com.app.payload.AddHotelDTO;
import com.app.repository.CityRepository;
import com.app.repository.TourPackageRepository;



@Service
@Transactional

public class TourPackageServiceImpl implements TourPackageService {

	
	@Autowired
	private CityRepository cityDao;
	
	@Autowired
	private TourPackageRepository tourPackageDao;
	
	@Autowired
	private ModelMapper mapper;
	

	@Override
	public TourPackage addTourPackage(AddTourPackage tourpackage) {
	
		TourPackage tp= mapper.map(tourpackage, TourPackage.class);
		
		
		return tourPackageDao.save(tp);
	}

	@Override
	public String deleteTourPackage(Long packageid) {
		tourPackageDao.deleteById(packageid);
		return "Package deleted sucessfully";
	}

	@Override
	public List<TourPackage> getAllTourPackage() {
	
		return tourPackageDao.findAll();
	}

	@Override
	public TourPackage getTourPackageDetails(Long id) {
		
		//TourPackage tp= tourPackageDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Package ID!!!"));
	return  tourPackageDao.findById(id).orElse(null);
	}

	@Override
	public TourPackage assignCityToPackage(Long packageId, Long cityId) {
		Set<City> cities=null;
		
		TourPackage tourpackage = tourPackageDao.findById(packageId).get();
		City city= cityDao.findById(cityId).get();	
		cities=tourpackage.getAssignCities();
		cities.add(city);
		tourpackage.setAssignCities(cities);
		
		return tourPackageDao.save(tourpackage);
	}
	

	@Override
	public TourPackage updateTourPackage(Long packageId, AddTourPackage tourpackage) {

		TourPackage tobeUpdatedTourPackage=tourPackageDao.findById(packageId).orElseThrow();
		mapper.map(tourpackage, tobeUpdatedTourPackage);
		tobeUpdatedTourPackage.setId(packageId);
		
		
		return mapper.map(tobeUpdatedTourPackage, TourPackage.class);
	}
	

    @Override
	public List<AddHotelDTO> getHotelsByPackageId(Long packageId) {
        Optional<TourPackage> tourPackage = tourPackageDao.findById(packageId);
        
            Set<City> assignCities = tourPackage.get().getAssignCities();
            
            List<Hotel> allHotels = new ArrayList<>();
            for (City city : assignCities) {
                allHotels.addAll(city.getAssignhotel());
            }
            
            return allHotels.stream()
            		.map((hotel)-> mapper.map(hotel, AddHotelDTO.class)).collect(Collectors.toList());
        }

}
