
function mostrarTabla() {

//no negativos, no letras, si no estribe nada

    valor = prompt("Introduce un valor", "Escribe aquí");

    if (isNaN(valor) || (valor == "") || (valor < 0)) {
        if (valor < 0) {
            alert("Debes introducir un valor positivo.");
        } else {
            alert("Debes introducir un valor númerico.");
        }

    } else {

        var tabla = 'Tabla del ' + valor + '\n';

        for (var i = 0; i <= 10; i++) {
            tabla += valor + '*' + i + ' = ' + (i * valor) + '\n';
        }
        alert(tabla);

    }

}

