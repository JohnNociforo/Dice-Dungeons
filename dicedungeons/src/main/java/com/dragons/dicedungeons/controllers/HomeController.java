package com.dragons.dicedungeons.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dragons.dicedungeons.dao.DaoPersonaggi;
import com.dragons.dicedungeons.dao.DaoUtenti;

import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {
    @Autowired
    private DaoUtenti du;
    @Autowired
    private DaoPersonaggi dp;

    @GetMapping("welcome")
    public String welcome() {
        System.out.println("Mapping Welcome");
        return "preHomepage/preHomepage.html";
    }

    @GetMapping("home")
    public String home() {
        System.out.println("Mapping Homepage");
        return "home/index.html";
    }

    @GetMapping("personaggio")
    public String personaggio(HttpSession session) {
        System.out.println("Mapping scheda");

        if(session.getAttribute("loggato") == null)
            return "redirect:formlogin";

        return "schedaPg/personaggio.html";
    }

    @PostMapping("getpersonaggio")
    public ResponseEntity<Map<String,String>> getPersonaggio(HttpSession session) {
        int idUtente = Integer.parseInt(((Map<String,String>)session.getAttribute("utente")).get("id"));
        System.out.println(idUtente);
        Map<String,String> datiPersonaggio = dp.cercaPersonaggioPerUID(idUtente);
        return ResponseEntity.ok(datiPersonaggio);
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

    @PostMapping("finduser")
    public ResponseEntity<String> findUser(@RequestParam("username") String username,
        @RequestParam("password") String password) {
            if (du.cercaUtente(username, password) != null) {
                return ResponseEntity.ok("found");
            } else {
                return ResponseEntity.badRequest().body("Nome utente o password errati");
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

    @PostMapping("salvapersonaggio")
    public String salvaPersonaggio(HttpSession session, 
        @RequestParam("nome") String nome, 
        @RequestParam("imageurl") String imageurl,
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
            String nomeUtente = ((Map<String,String>)session.getAttribute("utente")).get("username");
            if (dp.save(nomeUtente, nome, imageurl, classe, razza, livello, hp, iniziativa, armorClass, forza, destrezza, costituzione, intelligenza, saggezza, carisma, allineamento, background, equipaggiamento, carattere, ideali))
                return "redirect:registrationsuccess";
            else
                return "redirect:register";
    }
}
