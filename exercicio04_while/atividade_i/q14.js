/*
14. Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O 
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então 
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada 
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2º turno.
*/

import { getNumber } from "./functions.js";

function calcularPorcentagem(total, candidato) {
    return ((candidato / total) * 100).toFixed(2);
}

function main() {
    let total = 0;
    let ciro = 0;
    let dilma = 0;
    let serra = 0;
    let emBranco = 0;
    let outros = 0;
    let indeciso = 0;

    while (true) {
        const option = getNumber(`Escolha uma das opções:
        Serra=45;
         Dilma=13;
          Ciro Gomes=23;
          indeciso=99;
          outros=98;
          nulo/branco=0. 
         `);
         
        if (option === -1) {
            break;
        }
        total++;

        switch (option) {
            case 45:
                serra++;
                break;
            case 13:
                dilma++;
                break;
            case 23:
                ciro++;
                break;
            case 98:
                outros++;
                break;
            case 99:
                indeciso++;
                break;
            case 0:
                emBranco++;
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }

    console.log(`Total de entrevistados: ${total}`);
    console.log(`Porcentagem de votos para Serra: ${calcularPorcentagem(total, serra)}%`);
    console.log(`Porcentagem de votos para Dilma: ${calcularPorcentagem(total, dilma)}%`);
    console.log(`Porcentagem de votos para Ciro: ${calcularPorcentagem(total, ciro)}%`);
    console.log(`Porcentagem de votos para outros candidatos: ${calcularPorcentagem(total, outros)}%`);
    console.log(`Porcentagem de eleitores indecisos: ${calcularPorcentagem(total, indeciso)}%`);
    console.log(`Porcentagem de votos nulos/brancos: ${calcularPorcentagem(total, emBranco)}%`);

    const votosValidos = serra + dilma + ciro;
    const votosTotal = total - emBranco;
    const porcentagemVotosValidos = (votosValidos / votosTotal) * 100;

    if (porcentagemVotosValidos > 50) {
        console.log("Não há necessidade de segundo turno.");
    } else {
        console.log("Pode haver segundo turno.");
    }
}

main();
