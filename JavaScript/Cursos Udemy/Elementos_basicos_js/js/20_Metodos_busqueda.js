'use strict'

// Busqueda en cadenas de texto
var texto = "El curso de JavaScript es muy muy bueno y muy muy completo";


var busqueda1 = texto.indexOf("curso");
console.log(busqueda1);
//Muestra el numero del caracter anterior a donde empieza pero solo de la primer coincidencia dentro del texto


var busqueda2 = texto.search("muy");
console.log(busqueda2);
//Igual al indexOf


var busqueda4 = texto.lastIndexOf("muy");
console.log(busqueda4);
//Nos permite hallar la ultima coincidencia dentro del texto


var busqueda5 = texto.match("muy");
console.log(busqueda5);
//Devuelve una array con las palabras, solo la primera coincidencia
var busqueda6 = texto.match(/muy/g);
console.log(busqueda6);
//utilizando (/muy/gi) realiza una busqueda global y nos encuentra todas las coincidencias


var busqueda7 = texto.startsWith("El");
console.log(busqueda7);
//Este metodo nos arroja true o false si encuentra la palabra que le indicamos (pero solo lo que este al inicio del texto)


var busqueda8 = texto.endsWith("completo");
console.log(busqueda8);
//Este metodo nos arroja true o false si encuentra la palabra que le indicamos (pero solo lo que este al final del texto)

var busqueda9 = texto.includes("JavaScript");
console.log(busqueda9);
//Este metodo nos arroja true o false si encuentra la palabra que le indicamos (En cualquier posicion)


var extraer_texto = texto.substr(3,5);
console.log(extraer_texto);
//Extraer el texto de la posicion 3 hasta la posicion 5 (desde, hasta)


var extraer_texto2 = texto.charAt(3);
console.log(extraer_texto2);
//Extraer el texto de la posicion 3 hasta la posicion 5 (desde, hasta)

