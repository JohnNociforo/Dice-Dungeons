package com.dragons.dicedungeons.controllers;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.dragons.dicedungeons.dao.*;

@Configuration
public class Context {
    @Bean
    public Database db() {
        return new Database("dicedragons");
    }

    @Bean
    public DaoUtenti du() {
        return new DaoUtenti();
    }

    @Bean
    public DaoPersonaggi dp() {
        return new DaoPersonaggi();
    }


}
