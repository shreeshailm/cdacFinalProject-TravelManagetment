package com.app.payload;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class HotelRespDTO {

	
	private Long hotelId;
	
	private String hotelName;

	private String hotelAddress;

	private double hotelPrice;
	
	private double hotelEarning;

	private boolean hotelActive;
	
}
