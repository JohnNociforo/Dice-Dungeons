package com.dragons.dicedungeons.dao;


import org.springframework.beans.factory.annotation.Autowired;

public class DaoUtenti {
    @Autowired
    private Database db;

    public boolean create(String nomeUtente, String email, String password) {
        String query = "insert into utenti (nomeUtente, email, password) values(?, ?, ?)";
        return db.update(query, nomeUtente, email, password);
    }
}