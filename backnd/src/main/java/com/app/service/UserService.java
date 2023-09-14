package com.app.service;

import java.util.List;

import com.app.payload.MyApiResponse;
import com.app.dto.SignupRequest;
import com.app.entities.User;

public interface UserService {

	SignupRequest getById(Long uId);
	
	List<SignupRequest> getAllUsers();

	MyApiResponse deleteUser(Long uId);

	MyApiResponse updateUser(Long uId, SignupRequest user);
}
