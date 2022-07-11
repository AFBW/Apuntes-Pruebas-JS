'use strict'

// Array Multidimensionales

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La vida es bella', 'Gran Torino', 'Todo y todo', 22, true];

var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);

//Añade un elemento .push()
/*
var elemento = prompt('Introduce una pelicula: ');

do {
    elemento = prompt('Introduce una pelicula: ');
    peliculas.push(elemento);
} while (elemento != 'ACABAR');
*/
// Elimina un elemento, el ultimo

peliculas.pop(); // Elimina el ultimo elemento, en este caso no s¡deseado

// Para eliminar un elemento concreto: Tendria que localizarlo mediante un indexOf y luego

var indice = peliculas.indexOf('Todo y todo');
if (indice > -1) {
    peliculas.splice(indice, 1);
}

console.log(peliculas);

// Para convertir un Array a un String

let peliculasString = peliculas.join();
console.log(peliculasString);

// Convertir String a Array

var cadena = 'cadena1, cadena2, cadena3';
var cadena_array = cadena.split(', ');

console.log(cadena_array);

// Ordenar Array

console.log(peliculas.sort());      // Ordena alfabeticamente
console.log(peliculas.reverse());   // Ordenan alfabeticamente al reves

// Formas de Recorrer un Array

const arrayPaises = ["Bolivia", "Ecuador", "Francia", "Brasil", "Holanda"];

// 1.Usando un ciclo for tradicional
const recorreArray = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i]);
    }
}

recorreArray(arrayPaises);
console.log('************************************')

// 2.Usando un while tradicional
const recorreArray1 = (arr) => {
    let i = 0;
    while (i <= arr.length - 1) {
        console.log(arr[i])
        i++;
    }

}

recorreArray1(arrayPaises);
console.log('************************************')

// 3. Usando un do...while tradicional
const recorreArray2 = (arr) => {
    let i = 0;
    do {
        console.log(arr[i])
        i++;
    } while (i <= arr.length - 1);

}

recorreArray2(arrayPaises);
console.log('************************************')

// 4. Usando la función map()
const recorreArray3 = (arr) => arr.map(item => item);

console.log(recorreArray3(arrayPaises));

// 5. Usando la función forEach()
const recorreArray4 = (arr) => arr.forEach(item => {
    console.log(item);
});

recorreArray4(arrayPaises);
console.log('************************************')


// Busqueda en Array

var precios = [10, 20, 40, 50, 80];

var busqueda = precios.some(precio => precio == 10); //Si es verdadero o falso
console.log(busqueda);

var busqueda1 = precios.find(precio => precio == 10); // Si se encuentra este valor
console.log(busqueda1);

var busqueda2 = precios.findIndex(precio => precio == 20); // En que posicion se encuentra
console.log(busqueda2);