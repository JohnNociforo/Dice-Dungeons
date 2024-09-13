package com.dragons.dicedungeons.dao;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

public class DaoUtenti {
    @Autowired
    private Database db;

    public boolean create(String nomeUtente, String email, String password) {
        String query = "insert into utenti (nomeUtente, email, password) values(?, ?, ?)";
        return db.update(query, nomeUtente, email, password);
    }

    public List<Map<String, String>> readProva() {
        return db.rows("select * from utenti");

    }
}