//1. Leia um número e mostre na tela se o número é positivo ou negativo.
import { question } from "readline-sync";

function positivoOuNegativo(n) {
    if (n >= 0) {
        return "Positivo"
    } else {
        return "Negativo"
    }
}

function main() {
    const num = question("Digite um número para ver se ele é positivo ou negativo: ");
    const result = positivoOuNegativo(num);
    console.log(`o número informado é ${result}. `);
}

main();
