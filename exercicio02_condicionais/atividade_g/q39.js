/*
9. Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido.
*/

import { question } from "readline-sync";
function semana(d) {
    let dia;
    if( d === 1) {
        dia = 'domingo';
    } else if(d === 2) {
        dia = 'segunda-feira';
    } else if(d === 3) {
        dia = 'terça-feira';
    } else if(d === 4) {
        dia = 'quarta-feira';
    } else if(d === 5) {
        dia = 'quinta-feira';
    } else if(d === 6) {
        dia = 'sexta-feira';
    } else if(d === 7) {
        dia = 'sábado';
    } else {
        return 'opção inválida'
    }
    return dia;
}

function main() {
    const num = parseInt(question("digite um número de 1 a 7 para ver o dia correspondente com relação aos dias da semanas. "));

    const dia = semana(num);

    //exibindo
    console.log(`O número informado é ${num} - ${dia}. `)
}

main();