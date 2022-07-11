'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion
function calculadora(numero1, numero2, mostrar = false) {

    // Conjunto de instruciones a ejecutar
    if (mostrar == false) {
        console.log('Operacion por consola:')
        console.log('Suma: ' + (numero1 + numero2));
        console.log('Resta: ' + (numero1 - numero2));
        console.log('Multiplicacion: ' + (numero1 * numero2));
        console.log('Division: ' + (numero1 / numero2));
        console.log(mostrar);
        console.log('**************************************')
    } else {
        document.write('<h2>Operacion por Pantalla:</h2>')
        document.write('Suma: ' + (numero1 + numero2) + '<br>');
        document.write('Resta: ' + (numero1 - numero2) + '<br>');
        document.write('Multiplicacion: ' + (numero1 * numero2) + '<br>');
        document.write('Division: ' + (numero1 / numero2) + '<br>');
        document.write(mostrar + '<br>');
        document.write('**************************************')
    }


    // return 'Hola soy la calculadora!!!';
}

// Invocar o llamar a la funcion
calculadora(2, 4);
calculadora(2, 4, true);
calculadora(8, 2, true);

/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
    calculadora(i, 2);
}
*/