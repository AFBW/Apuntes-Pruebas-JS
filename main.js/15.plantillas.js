'use strict'

// Plantillas de Texto

var nombre = prompt('Mete tu nombre');
var apellidos = prompt('Mete tus apellidos');

// var texto = 'Tu nombre es: ' + nombre + ' ,tus apellidos son: ' + apellidos;
var texto = ` 
<h1>Hola que tal</h1>
<h3>Tio eres la caña ${nombre}</h3>
<h3>Mr ${apellidos}</h3>
`;
document.write(texto);