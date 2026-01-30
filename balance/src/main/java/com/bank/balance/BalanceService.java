package com.bank.balance;

import org.springframework.stereotype.Service;

@Service
public class BalanceService {

    private final AccountRepository accountRepository;

    public BalanceService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public String getBalance() {
        return accountRepository.getBalance();
    }
}
