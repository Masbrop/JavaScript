'use strict'

// if - else

var edad1 = 12;
var edad2 = 30;

if (edad1 > edad2){
    console.log("La persona 1 es mayor que la 2");
}
else{
    console.log("La persona 2 es mayor que la 1");
}

/* OPERADORES RELACIONALES
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/
console.log("---------------------------------");

var edad = 20;
var nombre = "Johan";

if(edad > 18){
    console.log(nombre + " tiene " + edad + " años y es mayor de edad");
}   
else {
    console.log(nombre + " es menor de edad");
}

/* OPERADORES LOGICOS
AND(Y): && 
OR(O): ||
NEGACION: !
*/
console.log("---------------------------------");

var year = 2018;

// Negacion
if(year != 2016){
    console.log("El año no es 2016, realmente es: " + year);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}

// OR 
if(year == 2008 || year == 2018){
    console.log("El año termina en 8");
}