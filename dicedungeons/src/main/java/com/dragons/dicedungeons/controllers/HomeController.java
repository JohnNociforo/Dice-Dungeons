package com.dragons.dicedungeons.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import com.dragons.dicedungeons.dao.*;

import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {
@Autowired
private DaoUtenti du;

    @GetMapping("creapersonaggio")
    public String creaPersonaggio() {
        System.out.println("Mapping scheda");
        return "schedaPg/stylesheet.html";
    }

    @GetMapping("home")
    public String home() {
        System.out.println("Mapping Homepage");
        return "home/index.html";
    }

    //QUANDO APRE IL SITO CON URL VUOTO FA REDIRECT ALLA HOMEPAGE
    //SI PUò RINOMINARE E TOGLIERE PARAMENTRO IN INPUT
    @GetMapping("")
	public String home(HttpSession session)
	{

		//if(session.getAttribute("loggato") == null)
			//return "redirect:formlogin";
		//return "home/index.html";
        return home();
	}

    @GetMapping("prova")
	public String prova()
	{

		//if(session.getAttribute("loggato") == null)
			//return "redirect:formlogin";
		//return "home/index.html";
        List<Map<String,String>> rows = du.readProva();
        System.out.println(rows.get(0));
        return "";
	}

}
