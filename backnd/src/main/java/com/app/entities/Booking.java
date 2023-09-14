package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Indexed;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "booking")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Indexed
@ToString
public class Booking {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;

	@ManyToOne
    @JoinColumn(name = "tour_package_id")
    private TourPackage tourPackage;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
	
    private Long numberOfPersons;
    
    private Long price;
    
    private LocalDate bookingDate;
    
//    @OneToOne(mappedBy = "booking")
//    private Payment payment;
    
    

}