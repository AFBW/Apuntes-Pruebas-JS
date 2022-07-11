'use strict'

// Transformcion de textos

let numero = 444;
let texto1 = 'Hola Tio eres el mejor Hola.';
let texto2 = 'Eres un maquina!!!';

let dato = numero.toString();
let dato1 = texto1.toUpperCase();
let dato2 = texto2.toLowerCase();

console.log(typeof dato);
console.log(dato1);
console.log(dato2);

// Calcular Longitud

let nombre = 'Alejandro Fernandez';

console.log(nombre.length);

// Concatenar - Unir Textos

// let textoTotal = texto1 + ' ' + texto2;
let textoTotal = texto1.concat(texto2);
console.log(textoTotal);

// Busqueda

let busqueda = texto1.indexOf('Hola'); // Nos dice si contiene esta palabra y en que caracter empieza
console.log(busqueda);

let busqueda1 = texto1.lastIndexOf('Hola'); // Nos dice si contiene esta palabra y en que caracter termina
console.log(busqueda1);

let busqueda2 = texto1.search('Hola'); // Nos dice si contiene esta palabra y en que caracter termina(Si no se encuentra -1)
console.log(busqueda2);

let busqueda3 = texto1.match('Hola'); // Nos dice si contiene esta palabra en tipo Array
console.log(busqueda3);

let busqueda4 = texto1.match(/Hola/g); // Nos dice si contiene varias veces esta palabra
console.log(busqueda4);

let busqueda5 = texto1.substring(2, 4); // Nos obtiene los caracteres entre estas posiciones
console.log(busqueda5);

let busqueda6 = texto1.charAt(5); // Nos obtiene el caracter en esta posicion.
console.log(busqueda6);

let busqueda7 = texto1.startsWith('Hola'); // Nos dice si sempieza con True o no False
console.log(busqueda7);

let busqueda8 = texto1.endsWith('Hola'); // Nos dice si termina con True o no False
console.log(busqueda8);

let busqueda9 = texto1.includes('Hola'); // Nos dice si termina con True o no False
console.log(busqueda9);

// Remplazar

let remplazo = texto1.replace('Hola', 'Adios'); // Nos sustituye una palabra por otra
console.log(remplazo);

// Cortar
let corte = texto1.slice(3); // Nos corta
console.log(corte);

let corte1 = texto1.slice(3, 7); // Nos corta una secuencia
console.log(corte1);
