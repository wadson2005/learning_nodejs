/*
9. Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da 
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e 
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo, 
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
1º lugar: 9 pontos;
2º lugar: 6 pontos;
3º lugar: 4;
4º lugar: 3 pontos.
Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor. 
*/

import { getNumber, getString } from "./functions.js";

function main() {
    let qtdProvas;
    let qtdParticipantes;

    while (true) {
        qtdProvas = getNumber("Digite a quantidade de provas: ");
        qtdParticipantes = getNumber("Digite a quantidade de participantes: ");

        if (qtdProvas === 0 && qtdParticipantes === 0) {
            break;
        }

        let timeA = 0;
        let timeB = 0;
        let contadorProvas = 0;

        while (contadorProvas < qtdProvas) {
            let contadorParticipantes = 0;

            while (contadorParticipantes < qtdParticipantes) {
                const nome = getString("Digite o nome do participante: ");
                const classificacao = getNumber(`Qual a classificação de ${nome}: `);
                const tempo = getNumber(`Qual o tempo de conclusão de prova realizado por ${nome}? `);
                const clube = getString("Qual o clube? ");

                if (classificacao === 1) {
                    if (clube === 'a') {
                        timeA += 9;
                    } else if (clube === 'b') {
                        timeB += 9;
                    }
                } else if (classificacao === 2) {
                    if (clube === 'a') {
                        timeA += 6;
                    } else if (clube === 'b') {
                        timeB += 6;
                    }
                } else if (classificacao === 3) {
                    if (clube === 'a') {
                        timeA += 4;
                    } else if (clube === 'b') {
                        timeB += 4;
                    }
                } else if (classificacao === 4) {
                    if (clube === 'a') {
                        timeA += 3;
                    } else if (clube === 'b') {
                        timeB += 3;
                    }
                }

                contadorParticipantes++;
            }

            contadorProvas++;
        }

        if (timeA > timeB) {
            console.log(`Vitória do time A com ${timeA} pontos.`);
        } else if (timeA < timeB) {
            console.log(`Vitória do time B com ${timeB} pontos.`);
        } else {
            console.log(`Empate! Ambos os times têm ${timeA} pontos.`);
        }
    }
}

main();
