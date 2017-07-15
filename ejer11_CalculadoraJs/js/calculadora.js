
//abre o cierra la calculadora
function mostrarCalculadora(id,opacity,top, right) {
    
document.getElementById(id).style.opacity = opacity;
document.getElementById(id).style.top = top;
document.getElementById(id).style.right = right;

}

function operaciones(valor,calculado){    
    document.getElementById(calculado).value += valor;
}

function resultado(operacion){
    document.getElementById('operacion').value = eval(document.getElementById('operacion').value);
}

function limpiar(operacion){
    document.getElementById('operacion').value = '';document.getElementById('resultado').value = '';
}

