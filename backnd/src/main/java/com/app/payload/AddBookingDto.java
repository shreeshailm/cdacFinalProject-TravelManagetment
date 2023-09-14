package com.app.payload;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class AddBookingDto {
	 private Long bookingId;
	    private Long tourPackageId; // Only the ID is needed
	    private Long userId; // Only the ID is needed
	    private Long numberOfPerson;
	    private double price;
	    private LocalDate bookingDate;
}

