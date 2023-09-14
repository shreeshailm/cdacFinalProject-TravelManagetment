package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.payload.ApiResponse;

public interface ImageHandlingService {

//	ApiResponse uploadImageC(Long cId,MultipartFile img) throws IOException;
//	byte[] downloadImage(Long cId) throws IOException;
	String uploadImageP(Long pId,MultipartFile image) throws IOException;
	byte[] downloadImageP(Long pId) throws IOException;
}