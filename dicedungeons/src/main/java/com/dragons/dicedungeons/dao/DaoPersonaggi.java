package com.dragons.dicedungeons.dao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

public class DaoPersonaggi {
	@Autowired
	private Database db;

	public boolean save(String nomeUtente, String nome, String imageurl, String classe, String razza, int livello, int hp, int iniziativa, int armorClass, int forza, int destrezza, int costituzione, int intelligenza, int saggezza, int carisma, String allineamento, String background, String equipaggiamento, String carattere, String ideali) {
		String query = "INSERT INTO personaggi (idUtenti, nome, imageurl, classe, razza, livello, hp, iniziativa, armorClass, forza, destrezza, costituzione, intelligenza, saggezza, carisma, allineamento, background, equipaggiamento, carattere, ideali) " +
               "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " +
               "ON DUPLICATE KEY UPDATE " +
               "nome = VALUES(nome), " +
               "imageurl = VALUES(imageurl), " +
               "classe = VALUES(classe), " +
               "razza = VALUES(razza), " +
               "livello = VALUES(livello), " +
               "hp = VALUES(hp), " +
               "iniziativa = VALUES(iniziativa), " +
               "armorClass = VALUES(armorClass), " +
               "forza = VALUES(forza), " +
               "destrezza = VALUES(destrezza), " +
               "costituzione = VALUES(costituzione), " +
               "intelligenza = VALUES(intelligenza), " +
               "saggezza = VALUES(saggezza), " +
               "carisma = VALUES(carisma), " +
               "allineamento = VALUES(allineamento), " +
               "background = VALUES(background), " +
               "equipaggiamento = VALUES(equipaggiamento), " +
               "carattere = VALUES(carattere), " +
               "ideali = VALUES(ideali)";

		int idUtente = Integer.parseInt(cercaUtentePerUsername(nomeUtente).get("id"));
		System.out.println(nomeUtente + " " + idUtente);
        return db.update(query, idUtente, nome, imageurl, classe, razza, livello, hp, iniziativa, armorClass, forza, destrezza, costituzione, intelligenza, saggezza, carisma, allineamento, background, equipaggiamento, carattere, ideali);
    }

	public Map<String, String> cercaPersonaggioPerUID(int uid) {
		String query = "select * from personaggi where idUtenti = ?";
		Map<String, String> u = db.row(query, uid);
		return u == null ? null : u;
	}

	public Map<String, String> cercaUtentePerUsername(String username) {
		// Lancio la query sul db per verificare che username e password forniti
		// dall'utente siano
		// corretti. Se lo sono il db restituisce una mappa PIENA
		String query = "select * from utenti where username = ?";
		Map<String, String> u = db.row(query, username);
		System.out.println(u);
		// Se la mappa restituita dal DB è vuota significa che sarà null in quanto
		// l'utente non è presente nella tabella.
		// In caso contrario ritorna l'intera riga dell'utente al quale corrispondono
		// username e
		// password passati come parametri.
		return u == null ? null : u;
	}
}