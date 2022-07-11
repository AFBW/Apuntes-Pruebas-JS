'use strict'

alert('Hola');

// Pruebas con Let y Var

// Prueba con var (La variable var puede ser redeclarada)
var numero = 40;
console.log(numero);   // Valor 40;

if (true) {
    var numero = 50;
    console.log(numero);    // Valor 50;
}

console.log(numero);        // Valor 50

// Prueba con let (La variable let NO puede ser redeclarada)
let texto = 'Alejandro Fernandez el mejor del mundo';
console.log(texto);   // Valor 40;

if (true) {
    let texto = 'hola tio tio tioooo';
    console.log(texto);    // Valor 50;
}

console.log(texto);        // Valor 50
