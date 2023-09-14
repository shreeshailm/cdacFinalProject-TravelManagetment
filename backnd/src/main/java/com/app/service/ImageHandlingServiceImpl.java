package com.app.service;

import java.io.File;
import java.io.IOException;

import javax.annotation.PostConstruct;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exception.ApiException;
import com.app.entities.City;
import com.app.entities.TourPackage;
import com.app.payload.ApiResponse;
import com.app.repository.CityRepository;
import com.app.repository.TourPackageRepository;

@Service
public class ImageHandlingServiceImpl implements ImageHandlingService {

	@Autowired
	private CityRepository cityDao;
	
	@Value("${folder.location}")
	private String folderLocation;
	
	@Autowired
	private TourPackageRepository pkgDao;
	
	@PostConstruct
	public void init() {
		System.out.println("in init " + folderLocation);
		// check if folder exists --yes --continue
		File folder = new File(folderLocation);
		if (folder.exists()) {
			System.out.println("folder exists alrdy !");
		} else {
			// no --create a folder
			folder.mkdir();
			System.out.println("created a folder !");
		}
	}
	
	//upload image for package

	@Override
	public String uploadImageP(Long pId, MultipartFile image) throws IOException {
	    TourPackage pkg = pkgDao.findById(pId).orElse(null);

	    if (pkg == null) {
	        return "Package with id not found";
	    }

	    String pkgPath = folderLocation.concat(image.getOriginalFilename());
	    FileUtils.writeByteArrayToFile(new File(pkgPath), image.getBytes());

	    // Update only the 'image' field of the existing package
	    pkg.setImage(pkgPath);

	    // Save the updated package
	    pkgDao.save(pkg);

	    return "Image file uploaded successfully";
	}



//	@Override
//	public ApiResponse uploadImageC(Long cId, MultipartFile img) throws IOException {
//		City city=cityDao.findById(cId).orElseThrow(()->new com.app.custom_exception.ResourceNotFoundException("Invalid city ID!!"));
//		String path=folderLocation.concat(img.getOriginalFilename());
//		System.out.println(path);
//		FileUtils.writeByteArrayToFile(new File(path), img.getBytes());
//		city.setImagePath(path);
//		cityDao.save(city);
//		return new ApiResponse("Image file uploaded successfully for City id "+cId);
//	}
//	
	

//	@Override
//	public byte[] downloadImage(Long cId) throws IOException {
//		City cc=cityDao.findById(cId).orElseThrow(()-> new com.app.custom_exception.ResourceNotFoundException("city Id not Found :("));
//		String path=cc.getImagePath();
//		if (path != null) {
//			// path ---> File --> byte[]
//			return FileUtils.readFileToByteArray(new File(path));
//			//OR from DB : return emp.getImage();
//		} else
//			throw new ApiException("Image not yet Assigned!!");
//	}
//	
	
	//downlOad image from package
	@Override
	public byte[] downloadImageP(Long pId) throws IOException {
		TourPackage tPkg=pkgDao.findById(pId).orElseThrow(()->new com.app.custom_exception.ResourceNotFoundException("pkg id no found!!"));
		String tPath=tPkg.getImage();
		if (tPath != null) {
			// path ---> File --> byte[]
			return FileUtils.readFileToByteArray(new File(tPath));
			//OR from DB : return emp.getImage();
		} 
		return null;
	}
}