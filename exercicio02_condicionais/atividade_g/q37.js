/*
7. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5%. Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento.
*/

import { question } from "readline-sync";

function calcularAumento(salario) {
    let percentual = 0;

if (salario <= 280) {
    percentual = 0.20;
} else if((salario > 280) && (salario < 700)) {
    percentual = 0.15;
} else if((salario > 700) && (salario < 1500)) {
    percentual = 0.10;
} else if(salario > 1500) {
    percentual = 0.05;
} else {
    return 'valor inválido'
}

let valorAumento = percentual * salario;
let novoSalario = salario + valorAumento;
return [percentual, valorAumento, novoSalario]
}

function main() {
    const salario = parseFloat(question("digite o salário: "));

    const [percentual, valorAumento, novoSalario] = calcularAumento(salario);

    //exibindo
console.log(`informações do salário informado:
- salário original: R$${salario.toFixed(2)};
- percentual de aumento: ${percentual};
- valor do aumento: R$${valorAumento.toFixed(2)};
- novo salário: R$${novoSalario.toFixed(2)}.
`);
}

main();
