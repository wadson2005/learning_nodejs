/*
5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada 
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até 
chegar a 2.
*/

import { getNumber } from "./functions.js";

function main() {
    let X = getNumber("enter the x value: ");
    let n = getNumber ("enter the n value: ");

    while (n >= 2) {
        X = Math.floor(X / n);
        n --;
    }
    console.log(`the x value is ${X}`);
}
main();
