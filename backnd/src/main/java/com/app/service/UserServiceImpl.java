package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;
import com.app.payload.MyApiResponse;
import com.app.dto.SignupRequest;
import com.app.entities.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

@Autowired
private UserRepository uDao;

@Autowired
private ModelMapper mapper;

@Autowired
private PasswordEncoder encoder;

@Override
public List<SignupRequest> getAllUsers() {
List<User> list = uDao.findAll();
return list.stream()
		.map(user -> mapper.map(user, SignupRequest.class)).collect(Collectors.toList());
}

@Override
public MyApiResponse deleteUser(Long uId) {
User uu=uDao.findById(uId).orElseThrow(()->new com.app.custom_exception.ResourceNotFoundException("User Not Found") );
uDao.delete(uu);
return new MyApiResponse("User Deleted Successfully");
}

public SignupRequest getById(Long uId) {
User u =uDao.findById(uId).orElseThrow(()->new com.app.custom_exception.ResourceNotFoundException("User Not Found") );
return mapper.map(u,SignupRequest.class);
}

@Override
public MyApiResponse updateUser(Long uId, SignupRequest user) {

	User needToUpdate =uDao.findById(uId).orElseThrow(() -> new com.app.custom_exception.ResourceNotFoundException("User id not exists!"));
	mapper.map(user , needToUpdate);
	needToUpdate.setUserId(uId);
	needToUpdate.setPassword(encoder.encode(user.getPassword()));
	
	return new MyApiResponse("User updated successfully!");
}

}