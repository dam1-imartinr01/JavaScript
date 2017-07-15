/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ventana;

function mostrarCalculadora() {
   ventana = window.open("http://www.lmsgi.iesvjp.es/~imartinr/Script/Ejer09_Calculadora/public_html/index.html", "Calculadora Si", "width=200,height=260");

}

function cerrarCalculadora() {
   ventana.close();
}