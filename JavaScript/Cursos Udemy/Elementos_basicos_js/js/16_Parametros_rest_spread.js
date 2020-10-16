'use strict'

// Parametros rest y spread

function listadoFrutas(fruta1, fruta2){
    console.log("Fruta 1 : " + fruta1);
    console.log("Fruta 2 : " + fruta2);
    console.log("*******************");
}

listadoFrutas("Naranja", "Manzana", "Pera", "Sandia");

/*
Si se quieren añadir mas frutas no se podra hacer ya que la funcion solo esta recibiendo dos parametros, 
por lo cual se utilizan tres puntos adelante de un parametro para que los elementos que sean ingresados
se almacenen en una array de tantos valores como sean necesarios
*/

// rest
console.log("Ejemplo de rest con 3 puntos adelante");
function listadoFrutas2(fruta1, fruta2, ...lista_frutas){
    console.log("Fruta 1 : " + fruta1);
    console.log("Fruta 2 : " + fruta2);
    console.log(lista_frutas); 
    console.log("*******************"); 
}

listadoFrutas2("Naranja", "Manzana", "Pera", "Sandia", "Mango", "Melon", "Uva");

// spread
console.log("Ejemplo de spread con 3 puntos adelante");
var frutas = ["Naranja", "Manzana"];
listadoFrutas2(...frutas, "Pera", "Sandia", "Mango", "Melon", "Uva");

console.log("Ejemplo sin los 3 puntos adelante");
listadoFrutas2(frutas, "Pera", "Sandia", "Mango", "Melon", "Uva");