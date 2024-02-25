import {question} from 'readline-sync'
let velocidadeMetros = question("digite uma velocidade em M/S:");
let result = velocidadeMetros * 3.6;
console.log(`a velocidade digitada convertida para KM/H é igual "${result}"`);