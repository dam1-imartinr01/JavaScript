function crearTabla(valor) {

    valor = document.getElementById(valor).value;

    if (isNaN(valor)) {
        alert("Debes introducir un valor númerico.");
    } else {
        document.getElementById("resultado").innerHTML = "<ol>" + crearLi(valor) + "</ol>";
    }

}

var listas = "";
function crearLi(valor) {

    var abrirLi = "<li>";
    var cerrarLi = "</li>";

    for (var i = 0; i < valor; i++) {
        listas += abrirLi + "Fila: " + (i + 1) + cerrarLi;
    }
    return listas;
}
