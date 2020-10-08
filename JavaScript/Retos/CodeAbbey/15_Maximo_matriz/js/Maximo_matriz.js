'use strict'

let ciclo = parseInt(prompt("Cuando valores desea ingresa?"));
let vector = [];
var mayor = 0;
var menor = 0;

for(var i = 0; i < ciclo; i++){
    vector.push(parseInt(prompt("Ingrese un valor para la posicion " + i)));
}

for(var i = 0; i < ciclo; i++){
    for(var j = 0; i < ciclo; i++){
        if(vector[i] > vector[j] || vector[i] > mayor){
            mayor = vector[i];
        }
        if(vector[i] < vector[j] || vector[i] < menor){
            menor = vector[i];
        }
    }
}

alert("El numero mayor de la lista (" + vector + ") es " + mayor);
console.log("El numero mayor de la lista (" + vector + ") es " + mayor);
document.write("El numero mayor de la lista (" + vector + ") es " + mayor + "<br>");

alert("El numero menor de la lista (" + vector + ") es " + menor);
console.log("El numero menor de la lista (" + vector + ") es " + menor);
document.write("El numero menor de la lista (" + vector + ") es " + menor + "<br>");