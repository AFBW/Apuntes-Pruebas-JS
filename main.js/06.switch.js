'use strict'

// Switch

var edad = 77;
var imprime = "";

switch (edad) {
    case 18:
        imprime = 'Acabas de cumplir la mayoria de edad';
        break;
    case 25:
        imprime = 'Ya eres un adulto';
        break;
    case 40:
        imprime = 'No seas tonto, la crisis de los 40 no existe';
        break;
    default:
        imprime = 'Tu edad es neutra';
}

console.log(imprime)