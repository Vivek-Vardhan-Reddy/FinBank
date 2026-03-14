package com.banking.backend.controllers;

import com.banking.backend.model.Transaction;
import com.banking.backend.service.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service){
        this.service=service;
    }

    @PostMapping("/transfer")
    public Transaction transfer(@RequestBody Transaction t){
        return service.transfer(t);
    }

    @GetMapping("/transactions/{accountId}")
    public List<Transaction> getTransactions(@PathVariable Long accountId){
        return service.getTransactions(accountId);
    }
}
