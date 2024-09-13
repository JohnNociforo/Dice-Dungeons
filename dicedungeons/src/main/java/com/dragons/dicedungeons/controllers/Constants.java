package com.dragons.dicedungeons.controllers;

public class Constants {
    private static String enviroment = System.getProperty("os.name");

    public static String getEnviroment() {
        return enviroment;
    }
}
