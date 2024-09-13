package com.dragons.dicedungeons.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import com.dragons.dicedungeons.controllers.Constants;

public class Database {
	private Connection c;

	public Database(String nomeDB) {
		if (Constants.getEnviroment().equals("Linux")) {
			String percorso = "jdbc:mariadb://172.18.0.1/" + nomeDB;
			try {
				Class.forName("org.mariadb.jdbc.Driver");
				c = DriverManager.getConnection(percorso, "root", "root");
			} catch (ClassNotFoundException e) {
				System.err.println("Controlla le referenced libraries per vedere se Ã¨ presente il connector.");
			} catch (SQLException e) {
				System.err.println(
						"Impossibile connettersi al DB. Controlla i dati inseriti di percorso, user e password.");
			}
		} else {
			String percorso = "jdbc:mysql://localhost:3306/" + nomeDB + "?useSSL=false&serverTimezone=UTC";
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				c = DriverManager.getConnection(percorso, "root", "root");
			} catch (ClassNotFoundException e) {
				System.err.println("Controlla le referenced libraries per vedere se Ã¨ presente il connector.");
			} catch (SQLException e) {
				System.err.println(
						"Impossibile connettersi al DB. Controlla i dati inseriti di percorso, user e password.");
			}
		}
	}// Fine costruttore

	public Connection getConnection() {
		return this.c;
	}

	public List<Map<String, String>> rows(String query, String... params) {
		List<Map<String, String>> ris = new ArrayList<Map<String, String>>();
		PreparedStatement ps = null;
		try {
			ps = c.prepareStatement(query);
			for (int i = 0; i < params.length; i++) {
				ps.setString(i + 1, params[i]);
			}
			ResultSet tabella = ps.executeQuery();

			int nColonne = tabella.getMetaData().getColumnCount();
			while (tabella.next()) {
				Map<String, String> riga = new HashMap<String, String>();
				for (int i = 1; i <= nColonne; i++) {
					riga.put(tabella.getMetaData().getColumnLabel(i),
							tabella.getString(i));
				}
				ris.add(riga);
			}
		} catch (SQLException e) {
			System.out.println("Query errata nel metodo rows: " + ps);
		} finally {
			System.out.println("Query: " + ps);
		}
		return ris;
	}// Fine di rows

	public Map<String, String> row(String query, String... params) {
		try {
			return rows(query, params).get(0);
		} catch (Exception e) {
			return null;
		}
	}// Fine di row()

	public boolean update(String query, String... params) {
		try {
			PreparedStatement ps = c.prepareStatement(query);
			for (int i = 0; i < params.length; i++) {
				ps.setString(i + 1, params[i]);
			}
			ps.executeUpdate();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}// Fine di update()
}
