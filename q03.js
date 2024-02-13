import { question } from "readline-sync";

let total = question("Digite a quantidade total de minutos: ");
total = parseInt(total);

let horas = Math.floor(total / 60);
let minutos = total % 60;

console.log(`A quantidade de minutos transformadas no formato de horas e minutos é a seguinte: ${horas}:${minutos}`);
