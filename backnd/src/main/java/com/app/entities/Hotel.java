package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "hotel")
@Getter
@Setter
@NoArgsConstructor
public class Hotel{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long hotelId;

	@Column(length = 50)
	private String hotelName;
	
	@Column(length = 200)
	private String hotelAddress;
	
	
	private String hotelDescription;
	
	private Long userId;
}
