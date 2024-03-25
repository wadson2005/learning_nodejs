/*
24. Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e 
escreva os N termos da PA. Ler o valor de N.
*/

import { getNumber } from "./functions.js";

function main() {
const r = getNumber("digite a razão da Pa (r): ");
const a1 = getNumber("digite o primeiro termo da Pa (a1): ");
const n = getNumber("quantidade de termos da Pa (n): ");

let contador = 0;
let a2 = a1;
while(contador < n) {
    console.log(`termo ${contador + 1}: ${a2}`);
    a2 += r;
    contador ++;
}
}
main();
