'use strict'
/*
Mostrar todos los numeros impares que hay entre 2 numeros
 introducidos por teclado
*/

let num1 = parseInt(prompt('Introduce un valor: ', 0));
let num2 = parseInt(prompt('Introduce otro valor: ', 0));

while (num1 < num2) {
    num1++;
    if (num1 % 2 != 0) {
        console.log(num1 + ' es impar');
    }
}
