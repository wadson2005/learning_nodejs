/*
20. Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de 
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado 
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição;
· Quantidade de litros consumidos para percorrer a distância indicada.
Escreva um algoritmo que leia estas informações e escreva:
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
· o consumo em km/l do carro.
*/

import { getNumber } from "./functions.js";

function main() {
    const distanciaTotal = 600;
    const capacidadeTanque = 50;

    let distanciaPercorrida = 0;
    let combustivelConsumido = 0;

    while (distanciaPercorrida < distanciaTotal && combustivelConsumido < capacidadeTanque) {
        const distanciaTrecho = getNumber("Distância percorrida desde a última medição: ");
        const consumoTrecho = getNumber("Consumo de combustível em litros para percorrer a distância indicada: ");

        distanciaPercorrida += distanciaTrecho;
        combustivelConsumido += consumoTrecho;

        const consumoPorLitro = distanciaTrecho / consumoTrecho;
        console.log(`Consumo do trecho: ${consumoPorLitro.toFixed(2)} km/l`);
    }

    if (distanciaPercorrida >= distanciaTotal) {
        console.log("O carro chegou ao destino!");
    } else {
        console.log("O carro parou por falta de combustível.");
    }

    const consumoMedio = distanciaPercorrida / combustivelConsumido;
    console.log(`Consumo médio: ${consumoMedio.toFixed(2)} km/l`);
}

main();
