'use strict'

window.addEventListener('load', function () {

    // Timers

    // setInterval (Se ejecuta continuamente),
    // para la prueba lo metemos dentro de una funcion

    function intervalo() {

        var tiempo = setInterval(function () {

            console.log('Set Interval ejecutado');

            var encabezado = document.querySelector('p');
            if (encabezado.style.fontSize == '50px') {
                encabezado.style.fontSize = '20px';
            } else {
                encabezado.style.fontSize = '50px';
            }

        }, 500);
        return tiempo;
    }

    var tiempo = intervalo();


    // setTimeout (Se ejecuta solo una vez)
    var tiempo1 = setTimeout(function () {

        console.log('Set Interval ejecutado');

        var encabezado = document.querySelector('h1');
        if (encabezado.style.fontSize == '50px') {
            encabezado.style.fontSize = '20px';
        } else {
            encabezado.style.fontSize = '50px';
        }

    }, 5000);

    // ClearInterval: El metodo que sirve para parar la funcionalidad de setInterval (Se ejecuta continuamente)
    var stop = document.querySelector('#stop');
    stop.addEventListener('click', function () {
        alert('¡¡¡¡Has parado el intervalo en bucle!!!!')
        clearInterval(tiempo);
    });

    // So arrancamos atravez del metodo Intervalo();
    var start = document.querySelector('#start');
    start.addEventListener('click', function () {
        alert('Has inicializado el movimiento!!!!!');
        intervalo();
    });
});


