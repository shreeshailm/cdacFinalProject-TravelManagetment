package com.app.service;

import java.util.List;

import com.app.dto.FeedbackResponse;
import com.app.entities.Feedback;

public interface FeedbackService {

	public List<FeedbackResponse> getAllFeedback();

	void addFeedback(Feedback fdbk);

	Feedback getFeedbackById(Long id);

	void saveFeedback(Feedback feedback);

}
