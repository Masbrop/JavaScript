'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor robles";
var texto2 = "ES MUY BUEN CURSO";

numero = numero.toString();
texto1 = texto1.toUpperCase();
texto2 = texto2.toLowerCase();

console.log(numero);
console.log(typeof(numero));
console.log(texto1);
console.log(texto2);

// Calcular longitud de un texto
var nombre = "Johan Castrillon";

console.log(nombre.length);

// Concatenar
var textoTotal = texto1 + " " +texto2;
console.log(textoTotal);

var textoTotal2 = texto1.concat(" " + texto2);
console.log(textoTotal2);