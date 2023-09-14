package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.FeedbackResponse;
import com.app.entities.Feedback;
import com.app.entities.TourPackage;
import com.app.entities.User;
import com.app.repository.FeedbackRepository;




@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {

	
	@Autowired
	private FeedbackRepository feedbackDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	UserService userService;
	
	@Autowired
	TourPackageService tourPackageService;
	
	@Override
	public List<FeedbackResponse> getAllFeedback() 
	{
		List<Feedback> feedbacks = feedbackDao.findAll();
		List<FeedbackResponse> responses = new ArrayList<FeedbackResponse>();
		
		for(Feedback feed:feedbacks)
		{
			FeedbackResponse response = new FeedbackResponse();
			
			response.setId(feed.getId());
            response.setRating(feed.getRating());
            response.setComment(feed.getComment());
            
            TourPackage tourPackage = tourPackageService.getTourPackageDetails(feed.getTourPackage().getId());
            response.setTourPackageName(tourPackage.getPackageName());

            // Fetch and set user name
            User user = mapper.map(userService.getById(feed.getUser().getUserId()),User.class);
            response.setUserName(user.getFirstName()+" "+user.getLastName());

            responses.add(response);
		}
		
		return responses;
	}

	@Override
	public void addFeedback(Feedback fdbk) {
		feedbackDao.save(fdbk);
		
	}

	@Override
	public Feedback getFeedbackById(Long id) {
		
		return feedbackDao.getReferenceById(id);
	}

	@Override
	public void saveFeedback(Feedback feedback) {
		feedbackDao.save(feedback);
		
	}

}
