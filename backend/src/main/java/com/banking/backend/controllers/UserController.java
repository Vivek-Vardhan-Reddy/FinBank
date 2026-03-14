package com.banking.backend.controllers;

import com.banking.backend.model.User;
import com.banking.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    private final UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/balance/{id}")
    public double getBalance(@PathVariable Long id){

        User user = repo.findById(id).orElseThrow();

        return user.getBalance();
    }
}