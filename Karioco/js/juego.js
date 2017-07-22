
function juego(casilla) {
    //azul = rgb(0, 203, 255)
    //verde = rgb(184, 220, 124)
    //rojo = rgb(238, 0, 88)

    switch (saberVerdesQuedan(casilla)) {
        case 0:
        {
            alert("No has podido ganar. PulsaF5");
            break;
        }
        case 1:
        {
            resolucionUnaVerde(casilla);
            break;
        }

        case 2:
        {
            aleatorios(casilla);
            break;
        }

        case 3:
        {
            aleatorios(casilla);
            break;
        }
        case 4:
        {
            aleatorios(casilla);
            break;
        }
        case 5:
        {
            aleatorios(casilla);
            break;
        }
        case 6:
        {
            aleatorios(casilla);
            break;
        }
        case 7:
        {
            aleatorios(casilla);
            break;
        }
        case 8:
        {
            resolucionOchoVerdes(casilla);
            break;
        }
        case 9:
        {
            alert("¡¡Ganaste!! . PulsaF5");
            break;
        }
    }

}

function aleatorios(casilla) {
    var aleatorio1;
    var aleatorio2;
//La máquina quiere que aciertes este aleatorio1
    do {
        aleatorio1 = Math.floor((Math.random() * 9) + 1);
        contenido = window.getComputedStyle(document.getElementById("casilla" + aleatorio1), null).getPropertyValue('background-color');
    } while (contenido === "rgb(184, 220, 124)")
    //La máquina quiere que aciertes este aleatorio2
    do {
        aleatorio2 = Math.floor((Math.random() * 9) + 1);
        contenido = window.getComputedStyle(document.getElementById("casilla" + aleatorio2), null).getPropertyValue('background-color');
    } while ((contenido === "rgb(184, 220, 124)") || (aleatorio1 === aleatorio2))
    //console.log("Casilla:" + casilla + " Queria " + aleatorio1 + " y " + aleatorio2);
    //
    //Si acertaste una de las dos te la pondra verde.    }
    if (casilla === aleatorio1 || casilla === aleatorio2) {
        document.getElementById("casilla" + casilla).style.background = "#B8DC7C";
    } else if (saberVerdesQuedan() < 8) {
        resolucion();
    }
}
function saberVerdesQuedan() {
    var contenido, i, contador = 0;
    for (i = 9; i > 0; i--) {
        contenido = window.getComputedStyle(document.getElementById("casilla" + i), null).getPropertyValue('background-color');
        if (contenido === "rgb(184, 220, 124)") {
            contador++;
        }
    }
    return contador;
}
function resolucion() {
    var aleatorio;
    //Si fallas te cambiará dos verdes; una a rojo y otra a azul.
    ////Azul
    do {
        aleatorio = Math.floor((Math.random() * 9) + 1);
        contenido = window.getComputedStyle(document.getElementById("casilla" + aleatorio), null).getPropertyValue('background-color');
    } while (contenido !== "rgb(184, 220, 124)")
    {
        document.getElementById("casilla" + aleatorio).style.background = "#00CBFF";
    }
    //Rojo
    do {
        aleatorio = Math.floor((Math.random() * 9) + 1);
        contenido = window.getComputedStyle(document.getElementById("casilla" + aleatorio), null).getPropertyValue('background-color');
    } while (contenido !== "rgb(184, 220, 124)")
    {
        document.getElementById("casilla" + aleatorio).style.background = "#EE0058";
    }
}

function resolucionUnaVerde(casilla) {
    var aleatorio1;
    var aleatorio2;
    var i;
    
    do {
        aleatorio1 = Math.floor((Math.random() * 9) + 1);
        contenido = window.getComputedStyle(document.getElementById("casilla" + aleatorio1), null).getPropertyValue('background-color');
    } while (contenido === "rgb(184, 220, 124)")
    //La máquina quiere que aciertes este aleatorio2 si aun te quedan dos casillas libres
    do {
        aleatorio2 = Math.floor((Math.random() * 9) + 1);
        contenido = window.getComputedStyle(document.getElementById("casilla" + aleatorio2), null).getPropertyValue('background-color');
    } while ((contenido === "rgb(184, 220, 124)") || (aleatorio1 === aleatorio2))
    //Si fallas te cambiará el verde a rojo   

    if (casilla === aleatorio1 || casilla === aleatorio2) {
        document.getElementById("casilla" + casilla).style.background = "#B8DC7C";

    } else {

        //saber donde esta l averde y ponerla a rojo
        for (i = 9; i > 0; i--) {
            contenido = window.getComputedStyle(document.getElementById("casilla" + i), null).getPropertyValue('background-color');
            if (contenido === "rgb(184, 220, 124)") {
                document.getElementById("casilla" + i).style.background = "#00CBFF";
            }

        }

    }
}

function resolucionOchoVerdes(casilla) {

    if (document.getElementById("casilla" + casilla).style.background !== "rgb(184, 220, 124)") {
        document.getElementById("casilla" + casilla).style.background = "#B8DC7C";
    } else {

    }
}
