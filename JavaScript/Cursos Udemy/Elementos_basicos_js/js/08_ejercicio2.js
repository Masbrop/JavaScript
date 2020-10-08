'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que ingreses un negativo"));
    if(isNaN(numero)){
        numero = 0;
    }
    else if(numero >= 0){
        suma += numero;
        contador++;
    }

}while(numero >= 0)

alert("La suma es: " + suma);
alert("El promedio es: " + (suma/contador));