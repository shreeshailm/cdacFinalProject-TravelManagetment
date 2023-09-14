package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.payload.AddBookingDto;
import com.app.entities.Booking;
import com.app.entities.Cancellation;
import com.app.entities.TourPackage;
import com.app.entities.User;
import com.app.repository.BookingRepository;
import com.app.repository.CancellationRepository;
import com.app.repository.TourPackageRepository;
import com.app.repository.UserRepository;


@Service
@Transactional
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private TourPackageRepository tourPackageDao;
	
	@Autowired
	private UserRepository userDao;
	
	@Autowired
	private BookingRepository bookingDao;
	
	@Autowired
	private CancellationRepository cancellationDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public Booking addBooking(AddBookingDto booking) {

		booking.setBookingDate(LocalDate.now());
	Booking bkng= mapper.map(booking, Booking.class);
	 TourPackage tourPackage = tourPackageDao.findById(booking.getTourPackageId()).orElse(null);
	    User user = userDao.findById(booking.getUserId()).orElse(null);

	    bkng.setTourPackage(tourPackage);
	    bkng.setUser(user);
	    bkng.setNumberOfPersons(booking.getNumberOfPerson());
	    
		return bookingDao.save(bkng);
	}

	@Override
	public List<Booking> getAllBookings() {
		// TODO Auto-generated method stub
		 return bookingDao.findAll();
	}

	@Override
	public List<Booking>  getBookingByUserId(Long id) {
	List<Booking> list = bookingDao.findByUserId(id);		
        return list;
	}

	@Override
	public String deleteBooking(Long id) {
		// TODO Auto-generated method stub
		
		Booking bknging= bookingDao.findById(id).orElse(null);
		
		Cancellation cancl= new Cancellation();
		cancl.setTourPackage(bknging.getTourPackage());
		cancl.setUser(bknging.getUser());
		cancl.setCancellationDate(LocalDate.now());
		cancl.setPrice(bknging.getPrice());
		cancl.setNumberOfPersons(bknging.getNumberOfPersons());
		cancellationDao.save(cancl);
	
        bookingDao.deleteById(id);
        return "deleted";
	}

}































