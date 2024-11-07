package com.aryan.service;

import com.aryan.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User findUserByJwt(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

    User findUserById(Long userId) throws Exception;

    User updateUsersProjectSize(User user, int number) throws Exception;

}
