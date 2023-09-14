package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.payload.AddBookingDto;
import com.app.entities.Booking;
import com.app.entities.Cancellation;
import com.app.repository.CancellationRepository;



@Service
@Transactional
public class CancellationServiceImpl implements CancellationService {
	
	@Autowired
	private CancellationRepository cancellationDao;

	@Override
	public List<Cancellation> getAllCancellation() {
		// TODO Auto-generated method stub
		return cancellationDao.findAll();
	}

	@Override
	public List<Cancellation> getCancellationByUserId(Long id) {
		List<Cancellation> list = cancellationDao.findByUserId(id);		
        return list;
	}




}

