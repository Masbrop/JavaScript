'use strict'

let num1 = [];
let num2 = [];
let num3 = [];
let mayor = [];
var ciclo = parseInt(prompt("Cuantas veces desea ingresar valores a los vectores ?"));

for(var i = 0; i < ciclo; i++){
    num1.push(parseInt(prompt("Ingrese un valor para el vector uno")));
    num2.push(parseInt(prompt("Ingrese un valor para el vector dos")));
    num3.push(parseInt(prompt("Ingrese un valor para el vector tres")));

    if(num1[i] > num2[i] || num1[i] == num2[i]){
        if(num1[i] > num3[i] || num1[i] == num3[i]){
            mayor.push(num1[i])
        }
        else {
            mayor.push(num3[i]);
        }
    }
    else if (num2[i] > num3[i] || num2[i] == num3[i]){
        mayor.push(num2[i]);
    }
    else{
        mayor.push(num3[i]);
    }
}

alert("Los mayores numeros de los vectores (" + num1 + ") (" + num2 + ") y (" + num3 + ") son: " + mayor);
console.log("Los mayores numeros de los vectores (" + num1 + ") (" + num2 + ") y (" + num3 + ") son: " + mayor);
document.write("Los mayores numeros de los vectores (" + num1 + ") (" + num2 + ") y (" + num3 + ") son: " + mayor);