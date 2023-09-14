package com.app.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Indexed;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "city")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Indexed
//@ToString(exclude = "hotel")
public class City  {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cityId;

	@Column(length = 30, nullable = false)
	private String cityName;

	@Column(length = 30, nullable = false)
	private String cityState;

	@Column(length = 15, nullable = false)
	private String cityCountry;
//	
//	private String imagePath;
	
	@ManyToMany(mappedBy = "assignCities",fetch = FetchType.EAGER,cascade =CascadeType.PERSIST)
	@JsonIgnore
	private Set<TourPackage> tourPackages=new HashSet<TourPackage>();

	
	@OneToMany(targetEntity = Hotel.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name = "city_id",referencedColumnName = "cityId" )
	private List<Hotel> assignhotel = new ArrayList<Hotel>();

}
