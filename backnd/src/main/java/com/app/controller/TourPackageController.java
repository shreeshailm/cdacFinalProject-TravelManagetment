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

import com.app.dto.AddTourPackage;
import com.app.entities.Hotel;
import com.app.entities.TourPackage;
import com.app.payload.AddHotelDTO;
import com.app.service.HotelService;
import com.app.service.HotelServiceImpl;
import com.app.service.ImageHandlingService;
import com.app.service.TourPackageService;

@RestController
@RequestMapping("/tourpackage")
@CrossOrigin(origins = "*")
public class TourPackageController {

	@Autowired
	private TourPackageService tourPackageService;
	
	@Autowired
	private ImageHandlingService imgService;
	
	@GetMapping
	public ResponseEntity<?> listAllTourPackage(){
		List<TourPackage> list= tourPackageService.getAllTourPackage();
		if(list==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getTourPackageDetailsById(@PathVariable Long id) {
		
		TourPackage n =tourPackageService.getTourPackageDetails(id);
		if(n==null)
			return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(n);
	}
	

	@PostMapping("/{packageId}/city/{cityId}")
	public TourPackage assignCityToPackage(@PathVariable Long packageId ,
			@PathVariable Long cityId ) {
		
		
		return tourPackageService.assignCityToPackage(packageId,cityId);
				
				
	}	
	
	@PostMapping("/addPackage")
	public TourPackage savePackage(@RequestBody AddTourPackage tourPackage) {
		 return tourPackageService.addTourPackage(tourPackage);
	}
	
	@PutMapping("/updatePackage/{id}")
	public ResponseEntity<TourPackage> UpdatePackage(@PathVariable Long id,@RequestBody AddTourPackage tourPackage){
		tourPackageService.updateTourPackage(id, tourPackage);
		 return new ResponseEntity<TourPackage>(HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public String deleteTourPackage(@PathVariable Long id) {
		return tourPackageService.deleteTourPackage(id);		
	}
	
	@GetMapping("/hotels/{id}")
	public ResponseEntity<?> listAllHotelPackage(@PathVariable Long id){
		List<AddHotelDTO> list= tourPackageService.getHotelsByPackageId(id);
		if(list==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);		
	}
	
	//upload city Image 
		@PostMapping(value = "/images/{pId}",consumes = "multipart/form-data")
		public String uploadImage(@PathVariable Long pId,@RequestParam MultipartFile imgFile) throws IOException{
			System.out.println("in upload img"+pId);
			imgService.uploadImageP(pId, imgFile);
			
			return "success";//.body(imgService.uploadImageP(pId, imgFile));
			//return ResponseEntity.status(HttpStatus.CREATED).body(imgService.uploadImageP(pId, imgFile));

		}
		
		//download city img
		@GetMapping(value="/images/{pId}",produces = {IMAGE_GIF_VALUE, 
				IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE}) 
		public ResponseEntity<?> downloadimg(@PathVariable Long pId) throws IOException
		{
			System.out.println("in download img "+pId);
			return ResponseEntity.ok(imgService.downloadImageP(pId));
		}
}
