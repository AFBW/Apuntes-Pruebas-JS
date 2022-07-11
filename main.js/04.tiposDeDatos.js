
// Operadores
var numero1 = 7;
var numero2 = 13;
var operacion = numero1 + numero2;

console.log('El resultado de la operacion es: ' + operacion);

// Tipos de datos
var numero_entero = 33;
var cadena_texto = 'Hola que tal';
var verdadero_o_falso = false;

var numeroFalsoString = '77.8';

console.log(Number(numeroFalsoString) + 7); // Number combierte el String a numero
console.log(parseInt(numeroFalsoString) + 7); // ParseInt combierte el String a numero Entero
console.log(parseFloat(numeroFalsoString) + 7); // Number combierte el String a numero Con Decimales
console.log(String(numeroFalsoString) + 7); // Number combierte el String a numero Con Decimales

// Typeof (Nos devuelve el tipo de dato)

console.log(typeof (numero_entero));
console.log(typeof (numeroFalsoString));
console.log(typeof (verdadero_o_falso));