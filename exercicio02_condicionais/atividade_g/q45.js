/*
15. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
 Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/

import { question } from "readline-sync";

function calcularPreco(s, a) {
    let precoMorango, precomaca;
    if(s <= 5 && s > 0) {
precoMorango = 2.5;
    } else{
        precoMorango = 2.2;
    }

    if(a <= 5 && a > 0) {
        precomaca = 1.8;
    } else {
        precomaca = 1.5;
    }

    const qtdTotalFrutas = s + a;
    const precoTotal = precoMorango * s + precomaca * a;

    if (qtdTotalFrutas > 8 || precoTotal > 25) {
const precoFinal = precoTotal - desconto(precoTotal);
return precoFinal;
    } else {
        return precoTotal;
    }
}

function desconto(x) {
    return 0.1 * x;
}

function main() {
    const strawberries = parseFloat(question("digite a quantidade de morangos em kg: "));
    const apples = parseFloat(question("digite a quantidade de maçãs em kg: "));

const result = calcularPreco(strawberries, apples);
console.log(`o preço total é R$${result.toFixed(2)}`);
}

main();
