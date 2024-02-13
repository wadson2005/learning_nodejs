import { question } from "readline-sync";

const n1 = question("digite o primeiro número");
const n2 = question("digite o segundo número:");
const n3 = question("digite o terceiro número:");

//convertendo
const numero1 = parseInt(n1);
const numero2 = parseInt(n2);
const numero3 = parseInt(n3);

//calculos
const soma = numero1 + numero2;
const diferenca = numero2 - numero3;
console.log(`A soma dos dois primeiros números é igual ${soma}, e a diferença entre os dois últimos é ${diferenca}`);
