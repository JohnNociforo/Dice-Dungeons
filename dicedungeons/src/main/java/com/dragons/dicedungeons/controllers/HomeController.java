package com.dragons.dicedungeons.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dragons.dicedungeons.dao.*;

import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {
    @Autowired
    private DaoUtenti du;

    @GetMapping("home")
    public String home() {
        System.out.println("Mapping Homepage");
        return "home/index.html";
    }

    @GetMapping("creapersonaggio")
    public String creaPersonaggio() {
        System.out.println("Mapping scheda");
        return "schedaPg/personaggio.html";
    }

    // MAPPING PER FORM REGISTRAZIONE NUOVO UTENTE
    @PostMapping("register")
    public String register(@RequestParam("username") String username,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            HttpSession session) {
        if (du.cercaUtente(username, password) != null)
            return "redirect:formlogin";
        else {
            if (du.create(username, email, password))
                return "redirect:formlogin";
            else
                return "redirect:register";
        }

    }

    // MAPPING PER REGISTRAZIONE AVVENUTA CON SUCCESSO
    @GetMapping("registrationsuccess")
    public String registerationSuccess() {
        System.out.println("Mapping Registrazione Avvenuta");
        return "registrationSuccess/registration_success.html";
    }

    // QUANDO APRE IL SITO CON URL VUOTO FA REDIRECT ALLA HOMEPAGE
    // SI PUò RINOMINARE E TOGLIERE PARAMENTRO IN INPUT
    @GetMapping("")
    public String home(HttpSession session) {

        // if(session.getAttribute("loggato") == null)
        // return "redirect:formlogin";
        // return "home/index.html";
        return home();
    }

    @GetMapping("prova")
    public String prova() {

        // if(session.getAttribute("loggato") == null)
        // return "redirect:formlogin";
        // return "home/index.html";
        List<Map<String, String>> rows = du.readProva();
        System.out.println(rows.get(0));
        return "";
    }

}
