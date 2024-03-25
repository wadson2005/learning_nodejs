import { getNumber } from "./functions.js";

function main() {
const x1 = getNumber("digite o primeiro número para multiplicar: ");
const x2 = getNumber("digite o segundo número: ");

let contador = 0;
let soma = 0;
while(contador < x2) {
soma += x1;
contador ++;
}
console.log(`resultado da multiplicação é: ${soma}`);

}

main();
