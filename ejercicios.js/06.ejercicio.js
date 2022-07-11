'use strict'
/*
Decir si un numero es par o impar
1.Ventana Promp
2.Si no es valido que nos pida de nuevo un numero
*/

let num = parseInt(prompt('Introduce un numero', 0));

while (isNaN(num)) {
    let num = parseInt(prompt('Introduce un numero', 0));
}

if (num % 2 == 0) {
    alert('Es un numero par');
} else {
    alert('Es un numero impar');
}