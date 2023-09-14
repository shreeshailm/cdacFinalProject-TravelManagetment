package com.app.dto;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class AddCity {
	
	
	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long cityId;

	@NotBlank
	private String cityName;

	
	private String cityState;

	
	private String cityCountry;
	
}
