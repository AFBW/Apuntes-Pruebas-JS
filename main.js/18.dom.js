'use strict'

// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.background = color;
}

// Formas de seleccionar elementos
let caja = document.getElementById('micaja');
let caja1 = document.querySelector('#micaja1');
let caja2 = document.querySelector('.micaja2');

caja.innerHTML = '¡Texto en la caja desde JS!';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'Hola';

caja1.innerHTML = '¡Texto en la caja1 desde JS!';
caja1.style.background = 'yellow';
caja1.style.padding = '20px';
caja1.style.color = 'black';
caja1.className = 'Hola';

caja2.innerHTML = '¡Texto en la caja2 desde JS!';
caja2.style.background = 'red';
caja2.style.padding = '20px';
caja2.style.color = 'white';
caja2.className = 'Hola';


console.log(caja);