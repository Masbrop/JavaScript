'use strict' //Para tener un uso estricto en cuanto sintaxis

//VARIABLES

var pais = "COLOMBIA";
var continente = "AMERICA";
var antiguedad = 2020;
var pais_continente = pais + ' ' + continente;
console.log(pais, continente, antiguedad);
alert(pais_continente);

//Prueba con var
var numero = 40;
console.log(numero); // valor 40

if (true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

console.log("--------");

//prueba con let
let numero2 = 40;
console.log(numero2); // valor 40

if (true){
    let numero2 = 50;
    console.log(numero2); // valor 50
}

console.log(numero2); // valor 40

//CONSTANTES

var web = "localhost";
const ip = "192.88.0.12";
//ip = "11" el valor de una constante no pueder ser modificado