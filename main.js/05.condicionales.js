
// Condicional IF
// Si A es igual a B entonces haz algo

let edad = 12;
let nombre = 'Alejandro';

/*
// Operadores Relaccionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + ' años, eres mayor de edad');
    if (edad == 33) {
        console.log('Tienes la edad de JesuCristo');
    } else if (edad != 33) {
        console.log('Lo siento pero no tienes la edad de Jesucristo');
    }
} else {
    console.log(nombre + " tiene " + edad + ' años, eres menor de edad');
}

/*
// Operadores Logicos
AND (Y) : &&
OR (O) : ||
Negacion: !
*/


// Negacion
var year = 2018;
if (year != 2016) {
    console.log('El año no es 2016 realmente es: ' + year);
}

// AND
if (year >= 2000 && year <= 2020) {
    console.log('Estamos en la era actual');
} else {
    console.log('Estamos en otra era tio');
}

// OR
if (year == 2008 || year == 2018) {
    console.log('El año acaba en 8')
}

