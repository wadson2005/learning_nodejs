/*
8. Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e
a quantidade de hora é 220.
Salário Bruto: (5 * 220) : R$ 1100,00
(-) IR (5%) : R$ 55,00
(-) INSS ( 10%) : R$ 110,00
FGTS (11%) : R$ 121,00
Total de descontos : R$ 165,00
Salário Liquido : R$ 935,00
*/

import { question } from "readline-sync";

function reajuste(horasTrabalhadas, valorHora) {
    let salarioBruto = horasTrabalhadas * valorHora;
    let descontoIR = 0;

    if (salarioBruto > 900 && salarioBruto <= 1500) {
        descontoIR = 0.05;
    } else if (salarioBruto > 1500 && salarioBruto <= 2500) {
        descontoIR = 0.1;
    } else if (salarioBruto > 2500) {
        descontoIR = 0.2;
    }

    let descontoINSS = 0.1 * salarioBruto;
    let fgts = 0.11 * salarioBruto;
    let totalDescontos = descontoIR * salarioBruto + descontoINSS;
    let salarioLiquido = salarioBruto - totalDescontos;

    return {
        salarioBruto,
        descontoIR: descontoIR * 100,
        descontoINSS,
        fgts,
        totalDescontos,
        salarioLiquido
    };
}

function main() {
    const quantidadeHoras = parseFloat(question("Digite a quantidade horas trabalhadas no mês: "));
    const valorHora = parseFloat(question("Informe o valor da hora: "));

    const result = reajuste(quantidadeHoras, valorHora);

    // Exibindo
    console.log(`- Salário Bruto: R$${result.salarioBruto.toFixed(2)}`);
    console.log(`- (-) IR (${result.descontoIR.toFixed(2)}%): R$${(result.descontoIR / 100 * result.salarioBruto).toFixed(2)}`);
    console.log(`- (-) INSS (10%): R$${result.descontoINSS.toFixed(2)}`);
    console.log(`- FGTS (11%): R$${result.fgts.toFixed(2)}`);
    console.log(`- Total de Descontos: R$${result.totalDescontos.toFixed(2)}`);
    console.log(`- Salário Liquido: R$${result.salarioLiquido.toFixed(2)}.`);
}

main();
