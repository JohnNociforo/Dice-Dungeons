package com.dragons.dicedungeons.dao;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

public class DaoUtenti {
    @Autowired
    private Database db;

    public boolean create(String nomeUtente, String email, String password) {
        String query = "insert into utenti (username, email, password) values(?, ?, ?)";
        return db.update(query, nomeUtente, email, password);
    }

    public List<Map<String, String>> readProva() {
        return db.rows("select * from utenti");
    }

	public Map<String,String> cercaUtente(String username, String password)
	{
		//Lancio la query sul db per verificare che username e password forniti dall'utente siano
		//corretti. Se lo sono il db restituisce una mappa PIENA
		String query = "select * from utenti where username = ? and password = ?";
		Map<String,String> u = db.row(query, username, password);
		//Se la mappa restituita dal DB è vuota significa che sarà null in quanto
		//l'utente non è presente nella tabella.
		//In caso contrario ritorna l'intera riga dell'utente al quale corrispondono username e
		//password passati come parametri.
		return u == null ? null : u;
	}
}