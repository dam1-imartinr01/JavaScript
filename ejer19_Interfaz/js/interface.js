

function cambiarColor(){
    
    document.querySelector("#interfaz").style.backgroundColor = "rgb(" + aleatorio() +","+ aleatorio() +","+ aleatorio()+ ")";
    
}

function aleatorio(){
     var num = Math.floor((Math.random()*250)*1);
     return num;
}

function aleatorio2(){
     var num = Math.floor((Math.random()*20)*1);
     return num;
}

function cambiarTexto(){
    document.querySelector("#texto").style.fontSize = aleatorio2()+"px";
}