import { getNumber } from "./functions.js";

function main() {
    const pesoDecolagem = 500000; // Peso de decolagem da aeronave em kg
    const pesoCombustivelMinimo = 10000 * 1.5; // Peso mínimo de combustível para decolagem em kg

    let qtdContainers = getNumber("Digite a quantidade de containers de carga: ");
    let pesoCarga = 0;

    let contadorContainers = 0;
    while (contadorContainers < qtdContainers) {
        let pesoContainer = getNumber(`Digite o peso do container ${contadorContainers + 1} (em kg): `);
        pesoCarga += pesoContainer;
        contadorContainers++;
    }

    let qtdPassageiros = 0;
    let pesoPassageiros = 0;
    let qtdBagagensTotal = 0;

    let numeroBilhete = getNumber("Digite o número do bilhete do passageiro (ou 0 para sair): ");
    while (numeroBilhete !== 0) {
        qtdPassageiros++;
        pesoPassageiros += 70; // Peso estimado de cada passageiro

        let qtdBagagens = getNumber(`Digite a quantidade de bagagens para o passageiro ${numeroBilhete}: `);
        qtdBagagensTotal += qtdBagagens;
        pesoPassageiros += qtdBagagens * 10; // Peso estimado de cada bagagem

        numeroBilhete = getNumber("Digite o número do bilhete do passageiro (ou 0 para sair): ");
    }

    let pesoTotalDecolagem = pesoDecolagem + (pesoCombustivelMinimo + pesoCarga + pesoPassageiros);

    console.log(`Quantidade de passageiros: ${qtdPassageiros}`);
    console.log(`Quantidade total de volume de bagagem: ${qtdBagagensTotal}`);
    console.log(`Peso dos passageiros: ${pesoPassageiros} kg`);
    console.log(`Peso da carga: ${pesoCarga} kg`);

    if (pesoTotalDecolagem >= pesoDecolagem) {
        console.log(`Quantidade possível de combustível: ${pesoTotalDecolagem - pesoDecolagem} kg`);
        console.log("Decolagem liberada!");
    } else {
        console.log(`Quantidade possível de combustível: ${pesoTotalDecolagem - pesoDecolagem} kg`);
        console.log("Decolagem não permitida devido ao peso excessivo.");
    }
}

main();
