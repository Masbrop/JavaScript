'use stricts'

var ciclo = parseInt(prompt("Cuantas veces desea realizar la suma de los vectores?"));
let num1 = [];
let num2= [];
var suma = 0;

for(var i = 0; i < ciclo; i++){
    num1.push(parseInt(prompt("Ingrese un valor para el vector uno")));
    num2.push(parseInt(prompt("Ingrese un valor para el vector dos")));
    suma += (num1[i] + num2[i]);
}

alert("La suma de los vectores 1 y 2 es: " + suma);
console.log("La suma de los vectores 1 y 2 es: " + suma);
document.write("La suma de los vectores 1 y 2 es: " + suma);