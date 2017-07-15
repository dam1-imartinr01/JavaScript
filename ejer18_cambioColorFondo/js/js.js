function cambiarColor(){
    
    document.querySelector("body").style.backgroundColor = "rgb(" + aleatorio() +","+ aleatorio() +","+ aleatorio()+ ")";
    
}

function aleatorio(){
     var num = Math.floor((Math.random()*250)*1);
     console.log(num);
     return num;
}