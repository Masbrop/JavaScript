'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana Prom
2. Si un numero no es valido que lo vuelva a pedir
*/

var numero = parseInt(prompt("Ingrese in numero",0));

while(isNaN(numero)){
    numero = parseInt(prompt("Ingrese in numero",0));
}

if(numero%2 == 0){
    alert("Es un numero par");
}
else{
    alert("Es un numero impar");
}