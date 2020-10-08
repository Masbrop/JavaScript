'use strict'

/*
Calculadora:
1. Pida numeros por pantalla
2. Si ponemos uno mal que lo vuelva a pedir
3. Dar el resultado en una alerta y por consola el resultado
*/

var num1 = 0;
var num2 = 0;
var selector = 0;
var operacion = 0;
var contador = 1;

do{
    if (contador == 1){
        num1 = parseInt(prompt("Ingrese el primer numero:"));
        num2 = parseInt(prompt("Ingrese el segundo numero"));

    while(isNaN(num1) && isNaN(num2)){
        alert("Estos caracteres no son validos, vuelva a ingresar los numeros");
        num1 = parseInt(prompt("Ingrese el primer numero:"));
        num2 = parseInt(prompt("Ingrese el segundo numero"));
    }
    }
    
    selector = parseInt(prompt("Elija la operacion que desea realizar  1.Suma  2.Resta  3.Multiplicacion  4.Division"));
    
    switch(selector){
        case 1:
            operacion = num1 + num2;
        break;
        case 2:
            operacion = num1 - num2;
        break;
        case 3:
            operacion = num1 * num2;
        break;
        case 4:
            if(num1 == 0 || num2 == 0){
                alert ("Operacion indeterminada no se puede realizar " + num1 + " / " + num2)
            }
            else
            operacion = num1 / num2;
        break;
        default:
            alert("Valor no valido");
    }
    alert("El resultado es: " + operacion);
    console.log("El resultado es: " + operacion)
    
    do {
        contador = parseInt(prompt("1. Ingresar nuevos numeros  2. Nueva operacion  3.Salir"));
    }while(isNaN(contador) || contador < 1 || contador > 3 )
}while(contador == 1 || contador == 2) 

alert("Gracias por usar nuestra calculadora!");
