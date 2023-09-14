package com.app.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AddCity;
import com.app.entities.City;
import com.app.entities.Hotel;
import com.app.entities.TourPackage;
import com.app.service.CityService;
import com.app.service.HotelService;
import com.app.service.HotelServiceImpl;
import com.app.service.ImageHandlingService;
import com.app.service.ImageHandlingServiceImpl;
import com.app.service.TourPackageService;

@RestController
@RequestMapping("/city")
@CrossOrigin(origins = "*")
public class CityController {

	@Autowired
	private CityService cityService;

	@Autowired
	private ImageHandlingService imgService; 
	
	@GetMapping
	public List<City> getAllCity() {
		return cityService.getAllCity();
	}

	@PostMapping("/addCity")
	public City saveCity(@RequestBody AddCity city) {
		return cityService.addCity(city);
		
	}

	@DeleteMapping("/{id}")
	public String deleteCity(@PathVariable Long id) {
		return cityService.deleteCity(id);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getCityById(@PathVariable Long id){
		
		City c= cityService.getCityById(id);
		if(c==null)
			return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(c);
	}

	@PutMapping("/updateCity/{id}")
	public ResponseEntity<City> updateCity(@PathVariable Long id, @RequestBody City city) {
		cityService.updateCity(id, city);
		return new ResponseEntity<City>(HttpStatus.CREATED);
	}
	
	
	@PostMapping("/{cityId}/hotel/{hotelId}")
	public City assignHotel(@PathVariable Long cityId , @PathVariable  Long hotelId) {
		return cityService.assignHotelToCity(cityId, hotelId);
	}
	
//	//upload city Image 
//	@PostMapping(value = "/images/{cId}",consumes = "multipart/form-data")
//	public ResponseEntity<?> uploadImage(@PathVariable Long cId,@RequestParam MultipartFile imgFile) throws IOException{
//		System.out.println("in upload img"+cId);
//		
//		return ResponseEntity.status(HttpStatus.CREATED).body(imgService.uploadImageC(cId, imgFile));
//	}
//	
//	//download city img
//	@GetMapping(value="/images/{cId}",produces = {IMAGE_GIF_VALUE, 
//			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE}) 
//	public ResponseEntity<?> downloadimg(@PathVariable Long cId) throws IOException
//	{
//		System.out.println("in download img "+cId);
//		return ResponseEntity.ok(imgService.downloadImage(cId));
//	}
//	

}
