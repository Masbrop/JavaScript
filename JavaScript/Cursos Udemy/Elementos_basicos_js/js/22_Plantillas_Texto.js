'use strict'

var nombre = prompt("INGRESA TU NOMBRE");
var apellidos = prompt("INGRESA TUS APELLIDOS");

var texto = "Mi nombre es " + nombre + "<br>" + "Mis apellidos son " + apellidos;
document.write(texto);
// Improductivo

// Plantillas de texto
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);