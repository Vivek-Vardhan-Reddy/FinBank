package com.banking.backend.service;

import com.banking.backend.model.Transaction;
import com.banking.backend.model.User;
import com.banking.backend.repository.TransactionRepository;
import com.banking.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class TransactionService {

    private final TransactionRepository repo;
    private final UserRepository userRepo;

    public TransactionService(TransactionRepository repo, UserRepository userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }

    public Transaction transfer(Transaction t){

        if(t.getFromAccount().equals(t.getToAccount())){
            throw new RuntimeException("Sender and Receiver cannot be same");
        }

        User sender = userRepo.findById(t.getFromAccount()).orElseThrow();
        User receiver = userRepo.findById(t.getToAccount()).orElseThrow();

        if(sender.getBalance() < t.getAmount()){
            throw new RuntimeException("Insufficient balance");
        }

        // subtract from sender
        sender.setBalance(sender.getBalance() - t.getAmount());

        // add to receiver
        receiver.setBalance(receiver.getBalance() + t.getAmount());

        // update balances
//        sender.setBalance(sender.getBalance() - t.getAmount());
//        receiver.setBalance(receiver.getBalance() + t.getAmount());

        userRepo.save(sender);
        userRepo.save(receiver);

        t.setType("TRANSFER");

        return repo.save(t);
    }

    public List<Transaction> getTransactions(Long accountId){
        return repo.findByFromAccountOrToAccount(accountId, accountId);
    }
}