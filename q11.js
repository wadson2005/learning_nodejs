import { question } from "readline-sync";

const numero = question("digite um número para ser invertido:");

let stringInvertida = "";
for (let i = numero.length - 1; i >= 0; i--) {
    stringInvertida += numero[i];
}

console.log(`${stringInvertida}`);
