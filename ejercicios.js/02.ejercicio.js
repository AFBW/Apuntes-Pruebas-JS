/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/
'use strict'

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce numeros hasta que introduzcas uno negativo', 0));
    var media = 0;

    if (isNaN(numero)) {    // Si el numero que introduce no es un numero, numero sera 0
        numero = 0;

    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }

    media = suma / contador;

    console.log('La suma es: ' + suma);
    console.log(contador);

} while (numero >= 0) // Solo en este caso se va a seguir ejecutando la condicion

alert('La suma de todos los numeros es: ' + suma);
alert('La media de todos los numeros es: ' + media);