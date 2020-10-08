'use strict'

/*
Mostrar todos los numero impares que esten entre dos numeros ingresados por teclado
*/

var num1 = parseInt(prompt("Introduce el primer numero"));
var num2 = parseInt(prompt("Introduce el segundo numero"));

document.write("<h2>Los numeros impares entre " + num1 + " y " + num2 + " son los siguientes</h2>");

for(var i = num1+1; i < num2; i++){
    if(i%2 != 0){
        document.write("<p>El " + i + " es impar</p>");
    }
}