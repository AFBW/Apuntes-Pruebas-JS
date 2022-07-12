'use strict'

// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.background = color;
}

// Formas de seleccionar elementos

// Por ID
let caja = document.getElementById('micaja');
console.log(caja);

// Por ID
// let caja1 = document.querySelector('div.micaja1');
let caja1 = document.querySelector('#micaja1');
console.log(caja1);

// Por Clase
// let caja2 = document.getElementByClassName('micaja2');
let caja2 = document.querySelector('.micaja2');
console.log(caja2);


// Por tipos
let todosLosDivs = document.getElementsByTagName('div');

let contenido = todosLosDivs[0].innerHTML = 'Oleeee';
let contenido1 = todosLosDivs[1].innerHTML = 'Viva ESPAÑA';
let contenido2 = todosLosDivs[2].innerHTML = 'Joder!!';
console.log(contenido);
console.log(contenido1);
console.log(contenido2);


caja.innerHTML = '¡Oleeee!';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'Hola';


caja1.style.background = 'yellow';
caja1.style.padding = '20px';
caja1.style.color = 'black';
caja1.className = 'Hola1';


caja2.style.background = 'red';
caja2.style.padding = '20px';
caja2.style.color = 'white';
caja2.className = 'Hola2';


console.log(caja);