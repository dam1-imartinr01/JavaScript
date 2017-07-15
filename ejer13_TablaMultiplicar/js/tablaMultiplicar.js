
function mostrarTabla(id) {

    var valor = document.getElementById(id).value;
    var i;
    var tabla = 'Tabla del ' + valor +'\n';

    for (var i = 0; i <= 10; i++) {        
        tabla += valor + '*' + i + ' = ' + (i * valor) + '\n';
    }
    alert(tabla);
}

