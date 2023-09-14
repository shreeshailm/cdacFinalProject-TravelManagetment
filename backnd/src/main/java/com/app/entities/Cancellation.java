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
@Table(name = "cancellation")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Indexed
@ToString
public class Cancellation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cancellationId;

	@ManyToOne
    @JoinColumn(name = "tour_package_id")
    private TourPackage tourPackage;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
	
    private Long numberOfPersons;
    
    private Long price;
    
    private LocalDate cancellationDate;
	
}

