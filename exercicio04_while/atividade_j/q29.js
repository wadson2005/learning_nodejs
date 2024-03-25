/*
29. Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar 
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do 
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se 
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00 
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ? 
*/

import { getNumber, getString } from "./functions";

function calcularSaldoInvestimento(valorInvestimentoMensal, taxaJurosMensal) {
    let saldoInvestimento = 0;
    let meses = 0;

    while (meses < 12) {
        saldoInvestimento += valorInvestimentoMensal;
        saldoInvestimento *= (1 + taxaJurosMensal);
        meses++;
    }

    return saldoInvestimento;
}

function main() {
    let continuar = true;

    while (continuar) {
        const valorInvestimentoMensal = getNumber("Informe o valor do investimento por mês: ");
        const taxaJurosMensal = getNumber("Informe a taxa de juros mensal (em decimal): ");
        
        const saldoAnual = calcularSaldoInvestimento(valorInvestimentoMensal, taxaJurosMensal);

        console.log(`Saldo do investimento após 1 ano: ${saldoAnual.toFixed(2)}`);

        const resposta = getString("Deseja processar mais um ano (S/N)? ").toUpperCase();
        continuar = (resposta === "S");
    }
}

main();
