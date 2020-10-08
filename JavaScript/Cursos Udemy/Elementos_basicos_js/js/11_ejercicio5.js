'use strict'

/*
Muestre todos los numeros divisores de un numero que se introduce
*/

var numero = parseInt(prompt("Ingresa un numero"));

document.write("Los divisores de " + numero + " son: ")
for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        document.write(i + "<br>");
    }
}