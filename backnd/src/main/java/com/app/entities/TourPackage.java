package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import org.springframework.stereotype.Indexed;
@Entity
@Table(name = "tour_package")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Indexed
//@ToString(exclude = "hotel")

public class TourPackage extends BaseEntity {

	@Column(length = 30)
	private String packageName;

	private String image;

	private String packageDescription;

	private Integer noOfDays;
	
	private Long price;

	
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
	@JoinTable(name ="tourpackage_city",
	joinColumns = @JoinColumn(name="tourPackage_id"),
	inverseJoinColumns =@JoinColumn(name="city_id")
	)

	private Set<City> assignCities= new HashSet<City>();
	
//
//	@ManyToMany(mappedBy = "assignPackage",fetch = FetchType.EAGER)
//	@JsonIgnore
//	private Set<User> customer=new HashSet<User>();

}
