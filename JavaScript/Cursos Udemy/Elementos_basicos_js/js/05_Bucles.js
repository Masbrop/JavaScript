'use strict'

// Bucle FOR
var numero = 15;

for(var i = 0; i <= numero; i++){
    console.log(i);
}

// Bucle While
var año = 2020;

while(año <= 2030){
    console.log("Estamos en el año: " + año);
    año++
    if(año > 2025){
        break;
    }
}

//Bucle Do While
var años = 15;

do{
    alert("SOLO CUANDO SEA DIFERENTE MAYOR A 20");
    años++;
}while(años < 20);