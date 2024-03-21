/*
6. Escreva um algoritmo para determinar o número de dígitos de um número informado.
*/

import { getNumber } from "./functions.js";

function countDigits(n) {
let contador = 0;
while(n !== 0) {
    contador ++;
    n = Math.floor(n / 10);
}
return contador;
}

function main() {
    const num = getNumber("enter a number to count how many digits its has: ");

const result = countDigits(num);
console.log(`the number entered have ${result} digits. `);
}
main();
