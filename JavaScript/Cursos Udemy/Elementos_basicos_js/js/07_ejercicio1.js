'use strict'

/*
Programa que pida dos numeros y nos diga el mayor, el menor o si son iguales
-Si no se proporciona un numero o son menores de cero nos vuelva a pedir los datos
*/
var num1 = parseInt(prompt("Ingrese el primer numero",0));
var num2 = parseInt(prompt("Ingrese el segundo numero",0));

console.log(num1, num2);


while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingrese el primer numero",0));
    num2 = parseInt(prompt("Ingrese el segundo numero",0));
}

if (num1 == num2){
    alert("Los numeros on iguales")
}
else if (num1 > num2){
    alert("El numero " + num1 + " es mayor que " + num2);
}
else{
    alert("El numero " + num2 + " es mayor que el numero " + num1);
} 