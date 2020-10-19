'use strict'

// Funciones anonimas
//Es una funcion que no tiene nombre y la puedo almacenar en una variable, se utiliza para hacer callbacks.
var pelicula = function(nombre_peli){
    return "La pelicula es: " + nombre_peli;
}

console.log(pelicula("Harry Potter"));

// Callback
//Es una funcion que se ejecuta dentro de otra
console.log("*****Callback*****")
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

//Funciones flecha
/* 
Se le quita la palabra function y se deja solo el dato y se pone una flecha "(dato) =>"
con esto se definen Callbacks mas claros 
*/
console.log("*****Funcion flecha*****")
function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar
}

sumame(5, 7, (dato) =>{
    console.log("La suma es: " + dato);
},
(dato) =>{
console.log("La suma por dos es: " + (dato*2));
});