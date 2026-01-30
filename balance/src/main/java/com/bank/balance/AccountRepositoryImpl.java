package com.bank.balance;

import org.springframework.stereotype.Repository;

@Repository
public class AccountRepositoryImpl implements AccountRepository {

    @Override
    public String getBalance() {
        return "Your current balance is $5000.";
    }
}
