package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.User;
import com.app.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  @Autowired
  UserRepository userRepository;

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException 
  {
	  System.out.println("Inside error:"+username);
    User user = userRepository.findByEmail(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + username));

    return UserDetailsImpl.build(user);
  }

}
