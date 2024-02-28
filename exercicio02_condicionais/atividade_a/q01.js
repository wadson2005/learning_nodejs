//1. Read 3 (three) numbers, check and write how many identical numbers there are between the numbers.
import { question } from "readline-sync";

function getNumber (msg) {    
const input = question(msg);
const n = Number(input);
return n;
}

function iguais(x, y) {
    return x === y;
}

function verificariguais(x, y, z) {
    let contador = 0;
    if (iguais(x, y)) {
        contador ++;
    }
    if (iguais(x, z)) {
        contador++;
    }
    if(iguais(y, z)) {
        contador++;
    }
    return contador;
}

function main() {
    console.log("Enter 3 numbers and see how many identical numbers there are between the entered numbers. ");
const n1 = getNumber("first number: ");
const n2 = getNumber("Second number: ");
const n3 = getNumber("tird: ");

const result = verificariguais(n1, n2, n3);

console.log(`${result}`);
}

main();
