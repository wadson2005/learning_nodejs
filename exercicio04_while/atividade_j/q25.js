/*
25. Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para 
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que 
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando 
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora, 
mostrando ao final, o número de cada canal e sua respectiva audiência.
*/

import { getNumber } from "./functions.js";

function calcularPercentual(total, qtd) {
    return (qtd * 100) / total;
}

function main() {
    let qtdCanal2 = 0;
let qtdCanal4 = 0;
let qtdCanal5 = 0;
let qtdCanal7 = 0;
let qtdCanal10 = 0;

let contador = 0;
    while(true) {
        const canal = getNumber("digite o canal: ");

        if(canal === 0) {
            break;
        }

const qtdTelespectadores = getNumber(`digite a quantidade de telespectadores do canal ${canal} da casa ${contador + 1}: `);

        switch(canal) {
            case 2:
                qtdCanal2 += qtdTelespectadores;
                break;
            case 4:
                qtdCanal4 += qtdTelespectadores;
                break;
            case 5:
                qtdCanal5 += qtdTelespectadores;
                break;
            case 7:
                qtdCanal7 += qtdTelespectadores;
                break;
            case 10:
                qtdCanal10 += qtdTelespectadores;
                break;
            default:
                console.log("Opção inválida. ");
        }
        
        contador ++;
    } //fim do while

    const total = qtdCanal2 + qtdCanal4 + qtdCanal5 + qtdCanal7 + qtdCanal10;

    console.log(`total de entrevistados: ${total}; `);
console.log(`canal 2: ${calcularPercentual(total, qtdCanal2).toFixed(1)}%; `);
console.log(`canal 4: ${calcularPercentual(total, qtdCanal4).toFixed(1)}%; `);
console.log(`canal 5: ${calcularPercentual(total, qtdCanal5).toFixed(1)}%; `);
console.log(`Canal 7: ${calcularPercentual(total, qtdCanal7).toFixed(1)}%; `);
console.log(`canal 10: ${calcularPercentual(total, qtdCanal10).toFixed(1)}%. `);
}

main();
