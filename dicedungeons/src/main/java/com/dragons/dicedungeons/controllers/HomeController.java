package com.dragons.dicedungeons.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("sheet")
    public String sheet() {
        System.out.println("Mapping scheda");
        return "stylesheet.html";
    }
}
