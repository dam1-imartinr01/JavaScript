
function verMas(contenido) {

    if (contenido === "contenido") {
        document.querySelector(".contenido1").style.display = "block";
        document.querySelector(".contenido2").style.display = "block";
        document.querySelector(".contenido3").style.display = "block";

    }

    document.querySelector("." + contenido).style.display = "block";

}
function verMenos(contenido) {

 if (contenido === "contenido") {
        document.querySelector(".contenido1").style.display = "none";
        document.querySelector(".contenido2").style.display = "none";
        document.querySelector(".contenido3").style.display = "none";

    }
    document.querySelector("." + contenido).style.display = "none";

}