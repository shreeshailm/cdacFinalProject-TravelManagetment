package com.app.payload;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddTourPackage {

	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long packageId;
	@NotBlank
	private String packageName;

	private String image;
	@NotBlank
	private String description;

	private Integer noOfDays;
	private Long price;

}
