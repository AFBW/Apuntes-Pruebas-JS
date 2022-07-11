'use strict'

/*
Mostrar todos los numeros divisores de un numero introducido en un promp
*/

let num = parseInt(prompt('Introduce un numero: ', 1));

for (let i = 0; i < num; i++) {

    if (num % i == 0) {
        console.log('Divisor: ' + i);
    }

}