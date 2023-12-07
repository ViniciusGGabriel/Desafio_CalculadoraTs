"use strict";
function insert(value) {
    const visor = document.getElementById("visor");
    visor.value += value;
}
function clearInput() {
    const visor = document.getElementById("visor");
    visor.value = visor.value.slice(0, -1);
}
function clearAll() {
    const visor = document.getElementById("visor");
    visor.value = "";
}
function calculate() {
    const visor = document.getElementById("visor");
    try {
        visor.value = eval(visor.value);
    }
    catch (error) {
        visor.value = "Erro";
    }
}
