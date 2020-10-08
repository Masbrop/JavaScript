'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

/*
var numero = parseInt(prompt("De que numero quieres la tabla:",1));
for(var i = 1; i < 10; i++){
    document.write(i + " x " + numero + " = " + (i*numero) + "<br>");
}
*/

// Todas las tablas de multiplicar
for(var j = 1; j < 10; j++){
    document.write("<h2>La tabla del " + j + "</h2>");
    for(var i = 1; i < 10; i++){
        document.write(j + " x " + i + " = " + (i*j) + "<br>");
    }
}
    