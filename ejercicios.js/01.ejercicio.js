/*
Programa que pida 2 numeros y que nos diga cual es el mayor, el menos y si son iguales.
PLUS: Si los numero no son un numero o son iguales o menore a cero que nos pida otro numero.
*/

let num1 = parseInt(prompt("Introduce el primer valor: ", 0));
let num2 = parseInt(prompt("Introduce el segundo valor: ", 0));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Introduce el primer valor: ", 0));
    num2 = parseInt(prompt("Introduce el segundo valor: ", 0));

}

if (num1 == num2) {
    alert('LOS NUMEROS SON IGUALES')
} else if (num1 > num2) {
    alert('EL NUMERO MAYOR ES: ' + num1);
    alert('EL NUMERO MENOR ES: ' + num2);

} else if (num1 < num2) {
    alert('EL NUMERO MAYOR ES: ' + num2);
    alert('EL NUMERO MENOR ES: ' + num1);
} else {
    alert('Introduce un numero correcto');
}