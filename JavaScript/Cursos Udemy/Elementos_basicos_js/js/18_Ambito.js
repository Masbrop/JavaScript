'use strict'

function holaMundo(texto){
    var hola_mundo = "Texo dentro de funcion - Variable local";

    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Texto fuera de funcion - Variable global";
holaMundo(texto);

console.log("--------------------------");
// Numero a string
var numero1 = 10;
numero1 = numero1.toString();
console.log(numero1);
console.log(typeof numero1);

console.log("--------------------------");
//String a numero
var texto1 = "20";
texto1 = parseInt(texto1);
console.log(texto1);
console.log(typeof texto1);