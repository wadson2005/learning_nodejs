/*
12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e 
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma 
diferença de 2 pontos sobre o adversário.
*/

import { getNumber } from "./functions.js";

function main() {
    let player1 = 0;
    let player2 = 0;
while(true) {
    const ponto = getNumber("jogador que ganhou o ponto (1 ou 2, ou 0 para sair): ");

    if(ponto === 0) {
        break;
    }

    if(ponto === 1) {
        player1++;
    } else if(ponto === 2) {
        player2 ++;
    } else {
        console.log("opção inválida. ");
    }

    if((player1 >= 21 || player2 >= 21) && Math.abs(player1 - player2) >= 2) {
        break;
    }
}
if(player1 > player2) {
    console.log(`Vitória do jogador 1 com ${player1} pontos! `);
} else if(player2 > player1) {
    console.log(`Vitória do jogador 2 com ${player2} pontos! `);
} else {
    let pontoFinal = Math.max(player1, player2);
    console.log(`Partida empatada em ${pontoFinal} pontos. `);
}
}
main();