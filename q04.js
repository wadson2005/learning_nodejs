import { question } from "readline-sync";

let dolar = question("digite o valor do dólar:");
let valor = question("digite o valor a ser convertido:");
dolar = parseFloat(dolar);
valor = parseFloat(valor);
let result = dolar * valor;
console.log(`o valor convertido é R$${result}$`);
