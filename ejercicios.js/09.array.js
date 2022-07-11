'use strict'
/**
 *  Hacer un programa:
1. Que pida 6 numeros por pantalla y los meta en un array
2. Mostrar el Array entero en el cuerpo de la pagina y en la consola
3. Ordenarlo e Invertir su orden y mostrarlo
5. Mostrar cuantos elemntos tiene el Array
6. Busqueda de un valor introducido por el usuario, que nos diga su posicion o indice
 */

function mostrarArray(elementos, textoCuston = '') {
    document.write("<h1>Contenido del Array," + textoCuston + "</h1>");
    document.write('<ul>');
    numeros.forEach((elemento, index) => {
        document.write('<li>' + elemento + '</li>');
    });
    document.write('</ul>');
}

// 1.Pedir 6 numeros
var numeros = [];

for (let i = 0; i < 6; i++) {
    numeros.push(parseInt(prompt('introduce un numero', 0)));
}

// 2.Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

// 2.1 Mostrar el Array por la Consola
console.log(numeros);


// 3.Ordenamos de menor a mayor
numeros.sort(function (a, b) { a - b });
mostrarArray(numeros, 'ordenados de menor a mayor:');

// 3.1 Ordenamos de mayor a menor
numeros.reverse(function (a, b) { a - b });
mostrarArray(numeros, 'ordenados de mayor a menor:');

// 4.Longitud del Array
document.write('<h1>El numero de elementos de mi array es: ' + numeros.length + ' elementos</h1>');

// Busqueda

let busqueda = parseInt(prompt('Introduce el numero a buscar: ', 0));

let posicion = numeros.findIndex(numero => numero = busqueda);

if (posicion && posicion != -1) {
    document.write('ENCONTRADO');
    document.write('<h1> Se encuentra en la posicion: ' + posicion + '</h1>');
} else {
    document.write('<h1>El valor no se ha encontrado!!</h1>');
}
