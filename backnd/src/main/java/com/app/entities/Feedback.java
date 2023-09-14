package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Indexed;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Indexed
	public class Feedback extends BaseEntity {
//	    @Id
//	    @GeneratedValue(strategy = GenerationType.IDENTITY)
//	    private Long id;
	    
	    private Integer rating;
	    
	    @Column(length = 1000) // Define an appropriate length for comments
	    private String comment;
	   
	    @ManyToOne(fetch = FetchType.EAGER)
	    @JoinColumn(name = "package_id")
	    private TourPackage tourPackage;

	    @ManyToOne(fetch = FetchType.EAGER)
	    @JoinColumn(name = "user_id")
	    private User user;

	    // Getters and setters
	}
