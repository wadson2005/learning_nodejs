import {question} from 'readline-sync';

let horas = question("digite a quantidade de horas");
let minutos = question("Digite a quantidade de minutos");
let n1 = parseInt(horas);
let n2 = parseInt(minutos);
let result = n1* 60 + n2;
console.log(`a quantidade de minutos no total é: ${result}`);