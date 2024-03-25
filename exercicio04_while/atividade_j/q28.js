/*28. Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand()) 
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número 
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente 
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso, 
escreva em quantas tentativas o usuário acertou.
*/

import { getNumber } from "./functions.js";

function main() {
    const aleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
    while(true) {
        const numero = getNumber("digite um número: ");
        tentativas ++;

     if(numero === aleatorio) {
        console.log(`parabéns! Você acertou com apenas ${tentativas} tentativas! `);
        break;
     } else if(numero < aleatorio) {
        console.log(`O número inserido é menor que o sorteado. `);
     } else if(numero > aleatorio) {
        console.log(`O número inserido é maior que o sorteado. `);
     }
    }

    console.log("fim! ");

}
main();
