'use strict'

// Eventos del Raton

// load : Nos permite cargar el script en la cabecera de nuesto html
window.addEventListener('load', () => {

    var boton = document.querySelector('#boton');

    function cambiarColor() {

        var bg = boton.style.background;

        if (bg == 'green') {

            boton.style.background = 'red';

        } else {

            boton.style.background = 'green';
        }

        boton.style.padding = '10px';
        boton.style.border = '1px solid #ccc';

        return true;
    }

    var boton = document.querySelector('#boton');

    // Click
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    // Mouse Over
    boton.addEventListener('mouseover', function () {
        boton.style.background = 'yellow';
    });

    // Mouseout
    boton.addEventListener('mouseout', function () {
        boton.style.background = 'blue';
    });

    // Focus
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', function () {
        console.log('[Focus] Estas dentro del input');
    });
    // Blur
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('blur', function () {
        console.log('[Blur] Estas fuera del input');
    });
    // Keydown
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('keydown', function () {
        console.log('[keydown]Estas pulsando esta tecla', String.fromCharCode(event.keycode));
    });
    // Keypress
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('keypress', function () {
        console.log('[keypress]Tecla Presionada', String.fromCharCode(event.keycode));
    });
    //Keyup
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('keyup', function () {
        console.log('[keyup]Tecla Soltada', String.fromCharCode(event.keycode));
    });
});
