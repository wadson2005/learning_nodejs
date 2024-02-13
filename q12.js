import { question } from "readline-sync";

let salarioStr = question("digite o salário do trabalhador:");

//convertendo
let salario = parseFloat(salarioStr);

//calculando
const aumento = salario * 0.25;
const novoSalario = salario + aumento;

console.log(`O novo salário com o aumento de 25% é igual ${novoSalario}`);
