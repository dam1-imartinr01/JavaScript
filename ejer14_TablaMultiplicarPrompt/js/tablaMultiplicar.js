
function mostrarTabla() {

    
    valor = prompt("Introduce un valor", "Escribe aquí");
    var i;
    var tabla = 'Tabla del ' + valor +'\n';

    for (var i = 0; i <= 10; i++) {        
        tabla += valor + '*' + i + ' = ' + (i * valor) + '\n';
    }
    alert(tabla);
}

