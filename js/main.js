/*
INTRO1-HERENCIA 
Crea una clase base, llamada Cl_padre, que contenga sólo un atributo llamado atribA. Luego, 
crea una clase hija llamada Cl_hija que herede de Cl_padre y que también contenga el atributo 
atribB. En el main creas una instancia de Cl_hija con los valores atribA=1 y atribA=2. */ 

import Cl_hija from "./Cl_hija.js";

let hija = new Cl_hija({atribA: 1, atribB: 2});

let salida = document.getElementById("salida");

salida.innerHTML = `
    <br>${hija.atribA}
    <br>${hija.atribB}`