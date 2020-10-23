'use strict'

// Transormacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "  es muy buen curso   ";
var texto3 = "Hola, como, estas";

var busqueda = texto1.replace("JavaScript","Symfony");
console.log(busqueda);
//Reemplaza el primera valor seleccionado por el segundo valor seleccionado

var busqueda2 = texto1.slice(14, 22);
console.log(busqueda2);
//Recorta una cadena de texto(desde, hasta)

var busqueda3 = texto2.trim();
console.log(busqueda3);
//Quita los espacios de adelante y de atras

var busqueda4 = texto3.split(",");
console.log(busqueda4);
//Almacena el string en una array y puedo indicar si quiero realizar una separacion ("defino el caracter separador")