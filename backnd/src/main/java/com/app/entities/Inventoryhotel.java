package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.lang.NonNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "inventory")
@Getter
@Setter
@NoArgsConstructor
public class Inventoryhotel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long iventoryId;

	@NonNull
	private LocalDate Date;
	@NonNull
	private Integer availableRoom;

	private Integer roomPrice;

	@ManyToOne
	@JoinColumn(name = "hotel_id")
	private Hotel hotel;

}
