/*
8. Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo 
quando a soma de dois números consecutivos da lista for igual a X.
*/
import { getNumber } from "./functions.js";

function main() {
    const X = getNumber("Digite um número X para comparar com a soma de dois números: ");
    let numeroAnterior = null;

    while (true) {
        let numero = getNumber("Digite um número: ");
        
        // Verificar se a soma de dois números consecutivos é igual a X
        if (numeroAnterior !== null && numeroAnterior + numero === X) {
            break; // Se a soma for igual a X, terminar o loop
        }

        numeroAnterior = numero;
    }

    console.log("Soma encontrada:", X);
}

main();
