/*
27. Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino, 
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.
*/

import { getNumber } from "./functions.js";

function main() {
    let somaIdadeMulheres = 0;
    let somaIdadeHomens = 0;
    let numHomensSolteiros = 0;
    let numMulheresSolteiras = 0;
    let numMulheresDivorciadasAcimaDe30 = 0;
    let contador = 0;

    while (contador < 100) {
        const sexo = getNumber("Qual o sexo (digite 1 para masculino, ou 2 para feminino): ");
        const idade = getNumber("Qual a idade: ");
        const estadoCivil = getNumber("Qual o estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo): ");
        
        if (sexo === 1) {
            somaIdadeHomens += idade;
            if (estadoCivil === 2) {
                numHomensSolteiros++;
            }
        } else if (sexo === 2) {
            somaIdadeMulheres += idade;
            if (estadoCivil === 2) {
                numMulheresSolteiras++;
            } else if (estadoCivil === 3 && idade > 30) {
                numMulheresDivorciadasAcimaDe30++;
            }
        }
        
        contador++;
    }

    const mediaIdadeMulheres = somaIdadeMulheres / contador;
    const mediaIdadeHomens = somaIdadeHomens / contador;
    const percentualHomensSolteiros = (numHomensSolteiros / contador) * 100;
    const percentualMulheresSolteiras = (numMulheresSolteiras / contador) * 100;

    console.log(`Média de idade das mulheres: ${mediaIdadeMulheres}`);
    console.log(`Média de idade dos homens: ${mediaIdadeHomens}`);
    console.log(`Percentual de homens solteiros: ${percentualHomensSolteiros}%`);
    console.log(`Percentual de mulheres solteiras: ${percentualMulheresSolteiras}%`);
    console.log(`Quantidade de mulheres divorciadas acima de 30 anos: ${numMulheresDivorciadasAcimaDe30}`);
}

main();
