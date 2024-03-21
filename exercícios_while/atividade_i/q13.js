/*
13. Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios 
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)
De Até Acréscimo
R$ 0,00 R$ 2.999,99 25 %
R$ 3.000,00 R$ 5.999,99 20 %
R$ 6.000,00 R$ 9.999,99 15 %
Acima de R$ 10.000,00 10 %
*/

import { getNumber } from "./functions.js";

function determinarAcrescimo(salario) {
    if (salario <= 2999.99) {
        return 0.25;
    } else if (salario <= 5999.99) {
        return 0.20;
    } else if (salario <= 9999.99) {
        return 0.15;
    } else {
        return 0.10;
    }
}

function main() {
    let salarioTotal = 0;
    let salarioComAjuste = 0;
    while(true) {
const salario = getNumber("Digite o salário do funcionário, ou 0 para exibir os resultados: ");

if(salario === 0) {
    break;
}

let acrescimo = determinarAcrescimo(salario);
let novoSalario = salario * (1 + acrescimo);

salarioTotal += salario;
salarioComAjuste += novoSalario;

console.log(`Novo salário do funcionário é R$${novoSalario.toFixed(2)}`);
    } //fim while

    let diferencaDeSalarios = salarioComAjuste - salarioTotal;
    console.log(`A soma dos salários antes do ajuste é R$${salarioTotal.toFixed(2)}`);
    console.log(`A soma dos salários com o ajuste aplicado é R$${salarioComAjuste.toFixed(2)}`);
   console.log(`O aumento total foi de R$${diferencaDeSalarios.toFixed(2)}`);
}
main();
