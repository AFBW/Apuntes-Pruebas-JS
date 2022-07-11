'use strict'
/**
 *  Hacer un programa:
1. Que pida 6 numeros por pantalla y los meta en un array
2. Mostrar el Array entero en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elemntos tiene el Array
6. Busqueda de un valor introducido por el usuario, que nos diga su posicion o indice
 */

// var numero = [];
var numeros = new Array(6);

for (let i = 0; i < 6; i++) {
    // numeros.push(parseInt(prompt('introduce un numero', 0)));
    numeros[i] = parseInt(prompt('Introduce un numero: ', 0));
}
// Mostrar el Array por la Consola
console.log(numeros);

// Mostrar en el cuerpo de la pagina
document.write(numeros);

// Ordenamos de menor a mayor
document.write('<div>');
document.write(numeros.sort(function (a, b) { return a - b }));
document.write('</div>');
// Ordenamos de mayor a menor
document.write('<div>');
document.write(numeros.reverse(function (a, b) { return b - a }));
document.write('</div>');