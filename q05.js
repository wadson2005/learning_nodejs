import {question} from "readline-sync"

let numero = question("Digite um número para realizar a soma de seus elementos:");

if (isNaN(numero)) {
    console.log("o número informado não é válido.");
} else {
    const nun = parseInt(numero);
    const centena = Math.floor(nun / 100);
   const dezenas = Math.floor((nun % 100) / 10);
   const unidades = nun % 10;
   //soma
   const result = centena + dezenas + unidades;
   console.log(`A soma dos elementos é igual a ${result}`);
}