

var ciudades = ["Plasencia", "Madrid", "Paris", "Roma", "Atenas", "Bruselas", "Berlin", "Varsovia", "Amsterdam", "Viena"];
var paises = ["Valle del Jerte", "España", "Francia", "Italia", "Grecia", "Belgica", "Alemania", "Polonia", "Holanda", "Austria"];
var aleatorio;
var respuesta;
var intentos = 0;

function generarPregunta() {
    aleatorio = Math.floor((Math.random() * ciudades.length));
    respuesta = paises[aleatorio];
    document.querySelector("#pregunta").innerHTML = "¿Cúal es el país cuya capital es " + ciudades[aleatorio] + " ?";

}

function comprobacion() {

    if (document.querySelector("#respuesta").value === respuesta) {
        document.querySelector("#resultado").innerHTML = " ¡Respuesta Correcta!";
        if (confirm("                  ¡Correcta!      \n¿Deseas jugar otra partida?")) {
            nuevaPartida();
        }
        ;

    } else {
        document.querySelector("#resultado").innerHTML = " ¡Sigue intentándolo!";
        intentos++;
        document.querySelector("#intentos").innerHTML = "Intentos: " + intentos;
        document.querySelector("#errores").innerHTML += document.querySelector("#respuesta").value + ", ";


    }

}

function nuevaPartida() {
    generarPregunta();
    document.querySelector("#respuesta").value = "";
    document.querySelector("#resultado").innerHTML = " ";
    intentos = 0;
    document.querySelector("#intentos").innerHTML = "Intentos: " + intentos;
    document.querySelector("#errores").innerHTML = "";
}

window.onload = function () {

    generarPregunta();

    document.querySelector("#comprobacion").onclick = function () {
        comprobacion();
    };

    document.querySelector("#nuevaPartida").onclick = function () {
        nuevaPartida()
    };

};
