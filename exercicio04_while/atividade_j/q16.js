/*
16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo. 
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um 
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.
*/

import {getNumber} from "./functions.js";

function calcularAcrescimo(total) {
    return 0.85 * total;
}

function main() {
    const saldoNaoPago = getNumber("Digite o saldo não pago do empréstimo para ver em quantos dias será pago: ");
    const valorParcela = 200;

    let contadorDias = 0;
    let valorPago = 0;

    while(valorPago < saldoNaoPago) {
        valorPago += valorParcela;
        contadorDias ++;
    }

    console.log(`O empréstimo será pago em ${contadorDias} dias, em parcelas de R$${valorParcela.toFixed(2)}.`);
}

main();
