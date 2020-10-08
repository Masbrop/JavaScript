'use strict'

var contador = parseInt(prompt("Cuantos numeros desea sumar?"));
var valor = 0;
var suma = 0;

for(var i = 1; i <= contador; i++){
    valor = parseInt(prompt("Ingrese el valor numero " + i ));
    suma += valor;
}

alert("El resutlado de la suma de todos los numeros es: " + suma);
console.log("El resutlado de la suma de todos los numeros es: " + suma);
document.write("El resultado de la suma de todos los numeros es: " + suma);