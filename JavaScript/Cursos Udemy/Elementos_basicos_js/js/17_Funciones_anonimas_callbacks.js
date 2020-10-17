'use strict'

// Funciones anonimas
//Es una funcion que no tiene nombre y la puedo almacenar en una variable, se utiliza para hacer callbacks.
var pelicula = function(nombre_peli){
    return "La pelicula es: " + nombre_peli;
}

console.log(pelicula("Harry Potter"));

// Callback
//Es una funcion que se ejecuta dentro de otra
function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar
}

sumame(5, 7, function(dato){
    console.log("La suma es: " + dato);
},
function(dato){
console.log("La suma por dos es: " + (dato*2));
});