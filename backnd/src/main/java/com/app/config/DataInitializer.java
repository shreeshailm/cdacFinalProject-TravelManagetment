package com.app.config;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entities.ERole;
import com.app.entities.Role;
import com.app.repository.RoleRepository;

@Component
public class DataInitializer {

    private final RoleRepository roleRepository;

    @Autowired
    public DataInitializer(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @PostConstruct
    public void init() {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role(ERole.ADMIN));
            roleRepository.save(new Role(ERole.CUSTOMER));
            roleRepository.save(new Role(ERole.HOTEL_OWNER));
            // Add more roles if needed
        }
    }
}