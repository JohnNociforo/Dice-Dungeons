package com.dragons.dicedungeons.controllers;

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
    @Autowired
    private DaoPersonaggi dp;

    @GetMapping("home")
    public String home() {
        System.out.println("Mapping Homepage");
        return "home/index.html";
    }

    @GetMapping("creapersonaggio")
    public String creaPersonaggio(HttpSession session) {
        System.out.println("Mapping scheda");
        if(session.getAttribute("loggato") == null)
            return "redirect:formlogin";
        return "schedaPg/personaggio.html";
    }

    // MAPPING PER FORM REGISTRAZIONE NUOVO UTENTE
    @GetMapping("formregistrazione")
    public String formregistrazione() {
        System.out.println("Mapping form registrazione");
        return "formRegistrazioneUtente/formRegistrazione.html";
    }

    @PostMapping("register")
    public String register(@RequestParam("username") String username,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            HttpSession session) {
        if (du.cercaUtente(username, password) != null)
        {
                System.out.println("TROVATO UTENTE!");
                return "redirect:login";
        }
        else {
            if (du.create(username, email, password))
                return "redirect:registrationsuccess";
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

    //MAPPING PER REGISTRAZIONE AVVENUTA CON SUCCESSO
    @GetMapping("formlogin")
    public String login() {
        System.out.println("Mapping Login");
        return "login/formLogin.html";
    }

    @PostMapping("login")
    public String login(@RequestParam("username") String username,
            @RequestParam("password") String password,
            HttpSession session) {
        if (du.cercaUtente(username, password) != null)
        {
                System.out.println("TROVATO UTENTE!");
                Map<String,String> utente = du.cercaUtente(username, password);
                session.setAttribute("loggato", "ok");
                session.setAttribute("utente", utente);
                return "redirect:homeutenteloggato";
        }
        else {
            System.out.println("UTENTE NON TROVATO!");
            return "redirect:login";
            
        }
        

    }

    //USO QUESTO MAPPING NEL BOTTONE LOGOUT DELLA HOMEPAGE PER FARE IN MODO CHE L'UTENTE SI SCOLLEGHI DAL SUO ACCOUNT
    @GetMapping("logout")
    public String logout() {
        System.out.println("Mapping LogOut");
        return "formregistrazione";
    }

    @GetMapping("homeutenteloggato")
    public String homeutenteloggato() {
        System.out.println("Mapping HomeUtenteLoggato");
        return "homeUtenteLoggato/homeUtenteLoggato.html";
    }


    //QUANDO APRE IL SITO CON URL VUOTO FA REDIRECT ALLA HOMEPAGE
    //SI PUò RINOMINARE E TOGLIERE PARAMENTRO IN INPUT
    @GetMapping("")
    public String home(HttpSession session) {

        if(session.getAttribute("loggato") == null)
            return "redirect:formlogin";

        return "home/index.html";
    }

    @PostMapping("creapersonaggio")
    public String creaPersonaggio(HttpSession session, 
        @RequestParam("nomepersonaggio") String nome, 
        @RequestParam("classe") String classe,
        @RequestParam("razza") String razza,
        @RequestParam("livello") Integer livello,
        @RequestParam("background") String background,
        @RequestParam("hp") Integer hp,
        @RequestParam("iniziativa") Integer iniziativa,
        @RequestParam("armorclass") Integer armorClass,
        @RequestParam("forza") Integer forza,
        @RequestParam("destrezza") Integer destrezza,
        @RequestParam("costituzione") Integer costituzione,
        @RequestParam("intelligenza") Integer intelligenza,
        @RequestParam("saggezza") Integer saggezza,
        @RequestParam("carisma") Integer carisma,
        @RequestParam("allineamento") String allineamento,
        @RequestParam("equipaggiamento") String equipaggiamento,
        @RequestParam("carattere") String carattere,
        @RequestParam("ideali") String ideali)
        {
            System.out.println(dp);
            String nomeUtente = ((Map<String,String>)session.getAttribute("utente")).get("username");
            System.out.println(nomeUtente);
            if (dp.create(nomeUtente, nome, classe, razza, livello, hp, iniziativa, armorClass, forza, destrezza, costituzione, intelligenza, saggezza, carisma, allineamento, background, equipaggiamento, carattere, ideali))
                return "redirect:registrationsuccess";
            else
                return "redirect:register";
    }
}
