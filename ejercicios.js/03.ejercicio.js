/*
 Hacer un Programa que muestre todos los numeros entre 2 numeros
  introducidos por el ususario 
 */

let num1 = parseInt(prompt('Introduce un numero: ', 0));
let num2 = parseInt(prompt('Introduce otro numero: ', 0));

document.write('<h1>De ' + num1 + ' a ' + num2 + ' estan estos numeros:</h1>');
for (let i = num1; i <= num2; i++) {
    document.write(i + '<br/>');
}