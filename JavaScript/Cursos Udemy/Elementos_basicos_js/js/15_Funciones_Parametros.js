'use strict'

// Funciones
console.log("Funciones");
function Calculadora(){
    console.log("Hola soy la calculadora");
    return "Si soy yo";
}

//Invocar la funcion
Calculadora();
console.log(Calculadora(),Calculadora());

//Parametros
console.log("Parametros");
function Calculadora2(num1, num2){
    console.log("******************************")
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("Multiplicacion: " + (num1*num2));
    console.log("Division: " + (num1/num2));
    console.log("******************************");
}

Calculadora2(3,4);
Calculadora2(10,2);

for (var i = 0; i <= 10; i++){
    console.log(i);
    Calculadora2(i,2);
}

// Parametros opcionales
console.log("Parametros opcionales");
function Mostrar(num1, num2, mostrar = false){
    if (mostrar == false){
        console.log("******************************")
        console.log("Suma: " + (num1+num2));
        console.log("Resta: " + (num1-num2));
        console.log("Multiplicacion: " + (num1*num2));
        console.log("Division: " + (num1/num2));
        console.log("******************************");
    }
    else{
        document.write("**********************");
        document.write("Suma: " + (num1+num2));
        document.write("Resta: " + (num1-num2));
        document.write("Multiplicacion: " + (num1*num2));
        document.write("Division: " + (num1/num2));
        document.write("**********************");
    }
}

Mostrar(1,3);   

// Funciones dentro de otras
console.log("Funciones dentro de funciones");
function porConsola(num1, num2){
    console.log("******************************")
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("Multiplicacion: " + (num1*num2));
    console.log("Division: " + (num1/num2));
    console.log("******************************");
}

function porPantalla(num1, num2){
    document.write("********************** <br>");
    document.write("Suma: " + (num1+num2) + "<br>");
    document.write("Resta: " + (num1-num2) + "<br>");
    document.write("Multiplicacion: " + (num1*num2) + "<br>");
    document.write("Division: " + (num1/num2) + "<br>");
    document.write("********************** <br>");
}

function Mostrar2(mostrar = false){
    if (mostrar == false){
        porConsola(2,4);
    }
    else{
        porPantalla(2,4);
    }
}

Mostrar2(true);