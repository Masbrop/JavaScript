'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Ingrese el primer numero"));
var num2 = parseInt(prompt("Ingrese el segundo numero"));

document.write("<h2>De" + num1 + " a "+ num2 + " estan estos numeros </h2>");
for(var i = num1+1; i < num2; i++){
    document.write(i+"<br>");
} 