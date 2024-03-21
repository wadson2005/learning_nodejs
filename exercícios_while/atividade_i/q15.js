/*
15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária 
e na base hexadecimal.
*/

import { getNumber } from "./functions.js";

function converterBinario(x) {
    let result = '';
    while(x > 0) {
        let resto = x % 2;
        result = resto + result; // Adicionamos o resto à esquerda do resultado
        x = Math.floor(x / 2); // Atualizamos o valor de x para o próximo passo
    }
    return result;
}

function converterHexadecimal(x) {
let result = '';
while(x > 0) {
    let resto = x % 16;

    switch(resto) {
        case 10:
            resto = 'A';
            break;
        case 11:
            resto = 'B';
            break;
        case 12:
            resto = 'C';
            break;
        case 13:
            resto = 'D';
            break;
        case 14:
            resto = 'E';
            break;
        case 15:
            resto = 'F'
            break;
    }
    result =  resto + result;
    x = Math.floor(x / 16);
}

return result;
}

function main() {
const num = getNumber("digite o um número entre 0 a 255 para converter para a base binária e exadecimal: ");

console.log(`o número ${num} convertido é igual:
base binária: ${converterBinario(num)}
base hexadecimal: ${converterHexadecimal(num)}`);
}

main();
