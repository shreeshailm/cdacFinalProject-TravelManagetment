package com.app.payload;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddHotelDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long hotelId;
	@NotBlank
	private String hotelName;
	@NotBlank
	private String hotelAddress;
	private String hotelDescription; 
	private Long cityId;
}
