package com.app.dto;

import javax.transaction.Transactional;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Transactional
public class AddFeedback {

	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long id;

	private Integer rating;

	private String comment;
	
	private Long tourPackageId;
	private Long userId;
}
