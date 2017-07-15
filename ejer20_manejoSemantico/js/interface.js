

window.onload = inicio;

function inicio() {

    document.querySelector("#fondo").onclick = function () {
        cambiarColor();
    };

    document.querySelector("#texto").onclick = function () {
        cambiarTexto();
    };

}


function cambiarColor() {

    document.querySelector("#interfaz").style.backgroundColor = document.querySelector("#cajaFondo").value;

}


function cambiarTexto() {
    document.querySelector("#interfaz").style.color = document.querySelector("#cajaTexto").value;
}