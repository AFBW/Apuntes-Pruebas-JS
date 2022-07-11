'use strict'

// Arrays, Arreglos, Matrices

var nombre = 'Alejandro Fernandez';
var nombres = ['Maria', 'Fernando', 'Ilde', 'Marta', 22, true, 'Chiqui'];

console.log(nombres);
console.log(nombres[3]);


// Objeto

var lenguajes = new Array('Javascript', 'Java', 'Php', true);

console.log(lenguajes);
console.log(lenguajes.length + ' Elementos');
console.log(lenguajes[0]);

/*
var elemento = parseInt(prompt('Que elemento del Array Quieres??', 0));
if (elemento >= nombres.length) {
    alert('Introduce el numero correcto');
    elemento = parseInt(prompt('Que elemento del Array Quieres??', 0));
} else {
    alert('El usuario seleccionado es: ' + nombres[elemento]);
}
*/

// Recorremos el Array FOR

document.write("<ol>");

for (let i = 0; i < nombres.length; i++) {
    document.write('<li>' + nombres[i] + '</li>');
}

document.write("</ol>");

// Recorremos el Array con un ForEach

document.write("<ul>");

lenguajes.forEach((elemento, index, data) => {

    document.write("<li>" + elemento + "</li>")

});

document.write("</ul>");

