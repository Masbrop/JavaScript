'use strict'

let num1 = [];
let num2 = [];
let division = [];
var ciclo = parseInt(prompt("Cuantos valores desea ingresar ?"));

for(var i = 0; i < ciclo; i++){
    num1.push(parseInt(prompt("Ingrese el valor " + i + " del vector uno")));
    num2.push(parseInt(prompt("Ingrese el valor " + i + " del vector dos")));
    division.push(Math.round(num1[i] / num2[i]));
}

alert("El vector (" + num1 + ") dividido el vector (" + num2 + ") da como resultado (" + division + ")");
console.log("El vector (" + num1 + ") dividido el vector (" + num2 + ") da como resultado (" + division + ")");
document.write("El vector (" + num1 + ") dividido el vector (" + num2 + ") da como resultado (" + division + ")");