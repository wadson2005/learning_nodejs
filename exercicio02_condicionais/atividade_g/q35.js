/*
5. Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato.
*/

import { question } from "readline-sync";

function maisBarato(p1, p2, p3) {
    if((p3 > p2) && (p3 > p1)) {
        if(p1 > p2) {
            return "segundo"
        } else {
            return "primeiro"
        }
    } else if ((p2> p1) && (p2 > p3)) {
        if(p3 > p1) {
            return "primeiro"
        } else {
            return 'terceiro'
        }
    } else if((p1 > p2) && (p1 > p3)) {
        if(p2 > p3) {
            return 'Terceiro'
        } else {
            return 'segundo'
        }
    }
}

function getNumber(msg) {
    return parseFloat(question(msg))
}

function main() {
    const produto1 = getNumber("digite o valor do primeiro produto: ");
    const produto2 = getNumber("digite o valor do segundo produto: ");
    const produto3 = getNumber("digite o valor do terceiro produto: ")

    const result = maisBarato(produto1, produto2, produto3)

    console.log(`o produto mais barato é o ${result} produto. `);
}

main();
