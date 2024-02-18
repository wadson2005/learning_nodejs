import { question } from "readline-sync";

const n1 = question("digite o primeiro número");
const n2 = question("digite o segundo número");

//convertendo
const numero1 = parseInt(n1);
const numero2 = parseInt(n2);

//calculando
const cuociente = Math.floor(numero1 / numero2);
const resto = numero1 % numero2;

console.log(`o cociente da divisão dos números informados é igual a ${cuociente}, e o resto é igual a ${resto}`);
