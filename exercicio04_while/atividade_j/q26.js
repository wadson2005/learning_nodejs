/*
26. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião 
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e 
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.
*/

import { getNumber } from "./functions.js";

function calcularPercentual(total, qtd) {
    return (qtd * 100) / total;
}

function main() {
let qtdOtimo = 0;
let idadePessoasOtimo = 0;
let qtdRegular = 0;
let qtdBom = 0;
let qtdPecimo = 0;

    let contador = 1;
    while(true) {
        const idade = getNumber(`digite a idade da pessoa ${contador} (ou -1 para enserrar): `);
        if(idade === -1) {
            break;
        }

        const opiniao = getNumber(`Qual a avaliação da pessoa ${contador} com relação ao filme: `);
contador ++;

        if(opiniao === 1) {
qtdOtimo ++;
idadePessoasOtimo += idade;
        } else if(opiniao === 3) {
            qtdRegular ++;
        } else if(opiniao === 2) {
            qtdBom ++;
        } else if(opiniao === 4) {
            qtdPecimo ++;
        } else {
            console.log("Opção inválida. ");
        }

    } // fim while

    const total = qtdOtimo + qtdBom + qtdRegular + qtdPecimo;
    const mediaOtimo = idadePessoasOtimo / qtdOtimo;
const percentualBom = calcularPercentual(total, qtdBom);

console.log(`Média da idade das pessoas que responderam ótimo: ${Math.floor(mediaOtimo)}; `);
console.log(`quantidade de pessoas que responderam regular: ${qtdRegular}; `);
console.log(`o percentual de pessoas que respondeu bom entre os entrevistados: ${percentualBom.toFixed(1)}% `);

}
main();

/*criar os restante das variáveis dos entrevistados e concluir a exibição */