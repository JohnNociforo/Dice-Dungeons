package com.dragons.dicedungeons.dao;
import java.util.*;

public class Dao
{
	private Database db;
    private static Dao INSTANCE;
    
    private Dao()
    {
       db = new Database("dicedragons");
    }
    
    public static Dao GETINSTANCE()
    {
       if(INSTANCE == null)
            INSTANCE = new Dao();
        return INSTANCE;
    }
    
    public List<Map<String,String>> read(String query, String... params)
    {
        return db.rows(query, params);
    }

    public List<Map<String,String>> leggiTutti(String tabella)
    {
        return db.rows("select * from " + tabella);
    }

    public boolean create(Map<String, String> m)
    {
        String query =  "insert into libri\n" + //
                        "(titolo,prezzo)\n" + //
                        "values\n" + //
                        "(?,?)";
        return db.update(query, m.get("titolo"), m.get("prezzo"));
    }//Fine di create()

    public boolean update(Map<String, String> m)
    {
        String query = "update libri set titolo = ?, prezzo = ? where id = ?";
        return db.update(query, m.get("titolo"), m.get("prezzo"), m.get("id"));
    }//Fine di update()

    public boolean delete(int id)
    {
        String query = "delete from libri where id = ?";
       return db.update(query, id + "");
    }//Fine di delete()

    public Map<String, String> cercaPerId(int id)
    {
        String query = "select * from libri where id = ?";
        return db.row(query, id + "");
    }

    public String stampaLista(List<Map<String,String>> elenco)
    {
        String ris = "";
        for(Map<String,String> m : elenco)
            ris += m.toString() + "\n";
        return ris;
    }
}