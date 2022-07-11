'use strict'
/*
Calculadora:
-Pida 2 numeros por pantalla
-Si metemos uno mal que nos vuelva a pedir.
-En el cuerpo de la pagina, en una alerta y por la consola el resultado de
sumar, restar, multiplicar y dividir esas dos cifras
*/

let numero1 = parseInt(prompt('Introduce un numero', 0));
let numero2 = parseInt(prompt('Introduce otro numero', 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce un numero', 0));
    numero2 = parseInt(prompt('Introduce otro numero', 0));
}

let resultado = 'La suma es: ' + (numero1 + numero2) + '\n' +
    'La resta es: ' + (numero1 - numero2) + '\n' +
    'La multiplicacion es: ' + (numero1 * numero2) + '\n' +
    'La division es: ' + (numero1 / numero2) + '\n';

console.log(resultado);
