package com.app.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddFeedback;
import com.app.dto.FeedbackResponse;
import com.app.dto.SignupRequest;
import com.app.entities.*;
import com.app.service.FeedbackService;
import com.app.service.TourPackageService;
import com.app.service.UserService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {
	
	
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private FeedbackService feedbackService;
	
	@Autowired
	private TourPackageService tourPackageService;
	
	@Autowired
    private UserService customerService;

	@GetMapping
	public ResponseEntity<?> listAllFeedback(){
		List<FeedbackResponse> list = feedbackService.getAllFeedback();
		if(list == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}
	
	
	
//	@GetMapping("/getFeedbackById/{id}")
//	public Feedback getFeedbackById(@PathVariable Long id) {
//		return feedbackService.getFeedbackById(id);
//	}
	
//	@GetMapping("/getFeedbackById/{id}")
//	public ResponseEntity<AddFeedback>  getFeedbackInfoById(@PathVariable Long id) {
//	    Feedback feedback = feedbackService.getFeedbackById(id);
//	    
//	    if (feedback != null) {
//	        AddFeedback feedbackInfoDTO = new AddFeedback();
//	        feedbackInfoDTO.setCustomerId(feedback.getCustomer().getId());
//	        feedbackInfoDTO.setTourPackageId(feedback.getTourPackage().getId());
//	        feedbackInfoDTO.setRating(feedback.getRating());
//	        feedbackInfoDTO.setComment(feedback.getComment());
//	        
//	        return ResponseEntity.ok(feedbackInfoDTO);
//	    } else {
//	        return ResponseEntity.notFound().build();
//	    }
//	}

	
	
	
	@PostMapping
	public ResponseEntity<String> addFeedback(@RequestBody AddFeedback feedbackDTO) {
	    // Create a new Feedback entity and set the tourPackage and customer based on the IDs
	    Feedback feedback = new Feedback();
	    
	    // You should validate that tourPackageId and customerId are valid before setting them
	    TourPackage tourPackage = tourPackageService.getTourPackageDetails(feedbackDTO.getTourPackageId());
	    SignupRequest customer = customerService.getById(feedbackDTO.getUserId());
	    
	    if (tourPackage == null || customer == null) {
	        return ResponseEntity.badRequest().body("Invalid tourPackageId or customerId.");
	    }
	    User u =mapper.map(customer,User.class);
	    feedback.setTourPackage(tourPackage);
	    feedback.setUser(u);
	    
	    // Set the rating and comment from the DTO if needed
	    feedback.setRating(feedbackDTO.getRating());
	    feedback.setComment(feedbackDTO.getComment());
	    
	    // Save the feedback to the database
	    feedbackService.saveFeedback(feedback);
	    
	    return ResponseEntity.ok("Feedback added successfully.");
	}

	
	
	
	
}
