import { question } from "readline-sync";

const numero1 = question("digite o primeiro número:");
const numero2 = question("digite o segundo número:");

//convertendo
const n1 = parseFloat(numero1);
const n2 = parseFloat(numero2);

//calculando
let result = (n1 + n2) / (n1 - n2);
result.toFixed(1);

console.log(`O resultado do calculo é igual ${result}`);
