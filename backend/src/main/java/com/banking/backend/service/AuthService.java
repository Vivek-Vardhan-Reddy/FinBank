package com.banking.backend.service;

import com.banking.backend.model.User;
import com.banking.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository repo;

    public AuthService(UserRepository repo) {
        this.repo = repo;
    }

    public User register(User user) {
        user.setBalance(1000);
        return repo.save(user);
    }

    public User login(String email, String password) {

        User user = repo.findByEmail(email).orElseThrow();

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}
