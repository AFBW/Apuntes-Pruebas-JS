'use strict'
/*
Tabla de multiplicar de un numero introducido por pantalla
*/

let num = parseInt(prompt('Introduce un numero: '));

document.write('<h1>Tabla de multiplicar del ' + num + ': </h1>');
for (let i = 0; i <= 10; i++) {
    let resultado = num * i;
    document.write(num + ' * ' + i + ' = ' + resultado + '<br/>');
}

//Todas las tablas de multiplicar

for (let i = 1; i <= 10; i++) {
    document.write('<h1>Tabla de multiplicar del ' + i + ': </h1>');
    for (let j = 0; j <= 10; j++) {
        let resultado2 = i * j;
        document.write(j + ' * ' + i + ' = ' + resultado2 + '<br/>');
    }
}