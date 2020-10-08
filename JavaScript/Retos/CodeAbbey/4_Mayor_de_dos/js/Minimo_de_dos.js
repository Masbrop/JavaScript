'use strict'

let num1 = [];
let num2 = [];
let mayor = [];
var ciclo = parseInt(prompt("Cuantas veces desea ingresar valores para los vectores ?"));

for(var i = 0; i < ciclo; i++){
    num1.push(parseInt(prompt("Ingrese un valor para el vector uno")));
    num2.push(parseInt(prompt("Ingrese un valor para el vector dos")));

    if(num1[i] > num2[i] || num1[i] == num2[i]){
        mayor.unshift(num1[i]);
    }
    else{
        mayor.unshift(num2[i]);
    }
}

alert("Entre los vectores " + num1 + " y " + num2 + " los numeros mayores son: " + mayor);
console.log("Entre los vectores " + num1 + " y " + num2 + " los numeros mayores son: " + mayor);
document.write("Entre los vectores " + num1 + " y " + num2 + " los numeros mayores son: " + mayor);