package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Cancellation;

public interface CancellationRepository extends JpaRepository<Cancellation, Long> {

	@Query(value = "SELECT * FROM cancellation WHERE user_id = :userId", nativeQuery = true)
    List<Cancellation> findByUserId(@Param("userId") Long userId);
	
}
