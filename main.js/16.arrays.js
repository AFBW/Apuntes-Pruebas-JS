'use strict'

// Arrays, Arreglos, Matrices

var nombre = 'Alejandro Fernandez';
var nombres = ['Maria', 'Fernando', 'Ilde', 'Marta', 22, true];

console.log(nombres);
console.log(nombres[3]);


// Objeto

var lenguajes = new Array('Javascript', 'Java', 'Php', true);

console.log(lenguajes);
console.log(lenguajes.length + ' Elementos');
console.log(lenguajes[0]);

var elemento = parseInt(prompt('Que elemento del aray Quieres??', 0));
alert(nombres[elemento]);