'use strict'

var ciclo = parseInt(prompt("Cuantos valores desea ingresar ? "));
let Fahrenheit = [];
let Celsius = [];

for(var i = 0; i < ciclo; i++){
    Fahrenheit.push(parseInt(prompt("Ingrese los grados Fahrenheit que desea convertir")));
    Celsius.push(parseInt(Math.round((Fahrenheit[i] - 32) * 5/9)));
}
console.log(Celsius);