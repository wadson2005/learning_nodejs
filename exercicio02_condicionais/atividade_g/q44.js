/*
14. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da 
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que 
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/

import { question } from "readline-sync";

function calcularDesconto (qtd, combustíveu) {
let desconto;
let precoCombustiveu;
if (combustíveu === 'G') {
    precoCombustiveu = 2.5;
if (qtd <= 20 && qtd > 0) {
    desconto = 0.04;
} else {
    desconto = 0.06;
}
} else if(combustíveu === 'A') {
    precoCombustiveu = 1.9;
    if (qtd <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05
    }
} else {
    return 'Opção inválida'
}

const precoCombustiveuNovo = precoCombustiveu - (desconto * precoCombustiveu);

const precoTotal = precoCombustiveuNovo * qtd;
return precoTotal;
}

function main() {
    const qtdLitros = parseFloat(question("Insira a quantidade de litros: "));
    const combustíveu = question("digite A para Álcool, ou G para gasolina: ").toUpperCase();

    const result = calcularDesconto(qtdLitros, combustíveu);

    console.log(`O preço total é de R$${result.toFixed(2)} `);
}
main();
