/*
18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação 
sobre os dois valores lidos.
*/

import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}
function sum(a, b) {
    return a + b;
}

function Subtração(a, b) {
    return a - b;
}

function Multiplicação(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b;
}

function main() {
    console.log(`chosen a option:
    - 1: addition;
    - 2: subtraction;
    - 3: multiplication;
    - 4: division;
    `)
    const option = getNumber("Enter your  ption: ");
    const n1 = getNumber("enter the first number: ");
    const n2 = getNumber("enter the second number: ");

if(option === 1) {
    console.log(sum(n1, n2));
}
if(option === 2) {
    console.log(Subtração(n1, n2));
}
if(option === 3) {
    console.log(Multiplicação(n1, n2));
}
if(option === 4) {
    console.log(divisao(n1, n2));
}
}
main();