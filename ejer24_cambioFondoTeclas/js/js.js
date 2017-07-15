
/* 
 Created on : 09-may-2017
 Author     : Ismael Martín Ramírez [imartinr01@informatica.iesvalledeljerteplasencia.es]
 */

/*Función para validar que se está pulsando la tecla espacio(32). 
 Si es así cambiará el color de fondo.*/
function validacionTecla(evObject) {
    var teclaPulsada = evObject.keyCode;

    if (teclaPulsada === 32) {
        //Animación.
        setTimeout(cambiarTexto, 0);
        setTimeout(cambiarTexto, 100);
        setTimeout(cambiarTexto, 200);
        setTimeout(cambiarTexto, 300);
        setTimeout(cambiarTexto, 400);
        setTimeout(cambiarTexto, 500);
        setTimeout(cambiarTexto, 600);
        setTimeout(cambiarTexto, 700);
        setTimeout(cambiarTexto, 800);
        setTimeout(cambiarTexto, 900);

        //Cambio de color.
        setTimeout(cambiarColor, 1100);
    } else {
        document.querySelector("#nomColor").innerHTML = "<p style=font-size:22px>Cambia de color con \"Espacio\"</p>";
    }
}

//Función para la animación.
function cambiarTexto() {
    var color = "rgb(" + aleatorio() + "," + aleatorio() + "," + aleatorio() + ")";
    document.querySelector("#nomColor").innerHTML = "<p>" + color + "</p>";
}

//Función para cambiar el color de fondo y añadir etiquetas de los colores en la cabecera.
function cambiarColor() {
    //Obtiene el color de fondo.Conversor retorna el color en hexagesimal
    var colorRgb = "rgb(" + aleatorio() + "," + aleatorio() + "," + aleatorio() + ")";
    var colorHexa = conversor(colorRgb);

    //Cambia el color de fondo y el nombre del color.
    document.querySelector("body").style.backgroundColor = colorRgb;
    document.querySelector("#nomColor").innerHTML = "<p><span>" + colorRgb + "</span><br /><span>" + colorHexa + "</span>";

    //Incluye un <span> en la cabecera, además de los que hay, con estilo y un evento onclick JS.
    document.querySelector("#cabecera").innerHTML += "<span style=background-color:" + colorRgb + "; onclick=opcionesCabecera('" + colorRgb + "','" + colorHexa + "');> </span>";
}

//Función para dar funcionalidad a las etiquetas de colores en la cabecera.
function opcionesCabecera(colorRgb, colorHexa) {
    document.querySelector("body").style.backgroundColor = colorRgb;
    document.querySelector("#nomColor").innerHTML = "<p><span>" + colorRgb + "</span><br /><span>" + colorHexa + "</span>";
}

//Función para convertir el colorRgb a colorHexagesimal.
// Retorna el color en Hexagesimal.
function conversor(colorRgb) {
    //Se obtienen los valores del color rgb por separado.
    var decimal = colorRgb.toString();
    var decimalSinLetras = decimal.substring(4, (decimal.length - 1));
    var arrayNumerosDecimal = decimalSinLetras.split(",", 5);
    var numDec1 = arrayNumerosDecimal[0];
    var numDec2 = arrayNumerosDecimal[1];
    var numDec3 = arrayNumerosDecimal[2];

    var arrayHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var hexadecimal = "#";
    /*Se concatena la variable hexagesimal con el valor de arrayHex 
     en las pociones del cociente y resto de cada numDecimalRgB dividido entre 16.*/
    hexadecimal = hexadecimal.concat(arrayHex[Math.trunc(numDec1 / 16)]);
    hexadecimal = hexadecimal.concat(arrayHex[numDec1 % 16]);
    hexadecimal = hexadecimal.concat(arrayHex[Math.trunc(numDec2 / 16)]);
    hexadecimal = hexadecimal.concat(arrayHex[numDec2 % 16]);
    hexadecimal = hexadecimal.concat(arrayHex[Math.trunc(numDec3 / 16)]);
    hexadecimal = hexadecimal.concat(arrayHex[numDec3 % 16]);

    return hexadecimal;
}

//Función para crear números aleatorios.
function aleatorio() {
    var num = Math.floor((Math.random() * 250) * 1);
    return num;
}

//Función de activación de eventos.
window.onload = function () {
    cambiarColor();

    document.querySelector("body").onkeypress = function () {
        //Pulsada una tecla, comprueba si es el espacio.
        document.onkeyup = validacionTecla;
    };

};

