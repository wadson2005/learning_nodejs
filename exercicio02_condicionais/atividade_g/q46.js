/*
16. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
 Até 5 Kg Acima de 5 Kg
File R$ 4,90 por Kg R$ 5,80 por Kg
Alcatra R$ 5,90 por Kg R$ 6,80 por Kg
Picanha R$ 6,90 por Kg R$ 7,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, 
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o 
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo 
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da 
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/

import { question } from "readline-sync";

function calcularPrecoTotal(tipoCarne, quantidade, cartaoTabajara) {
    let precoPorKg;

    if (tipoCarne === "File") {
        if (quantidade <= 5) {
            precoPorKg = 4.90;
        } else {
            precoPorKg = 5.80;
        }
    } else if (tipoCarne === "Alcatra") {
        if (quantidade <= 5) {
            precoPorKg = 5.90;
        } else {
            precoPorKg = 6.80;
        }
    } else if (tipoCarne === "Picanha") {
        if (quantidade <= 5) {
            precoPorKg = 6.90;
        } else {
            precoPorKg = 7.80;
        }
    } else {
        return null; // Tipo de carne inválido
    }

    const precoTotal = quantidade * precoPorKg;
    const desconto = cartaoTabajara ? (precoTotal * 0.05) : 0;
    const precoFinal = precoTotal - desconto;

    return { precoTotal, desconto, precoFinal };
}

function main() {
    const tipoCarne = question("Digite o tipo de carne (File, Alcatra ou Picanha): ");
    const quantidade = parseFloat(question("Digite a quantidade (em Kg): "));
    const cartaoTabajara = question("A compra será feita no cartão Tabajara? (S/N): ").toUpperCase() === 'S';

    const resultado = calcularPrecoTotal(tipoCarne, quantidade, cartaoTabajara);

    if (!resultado) {
        console.log("Tipo de carne inválido.");
        return;
    }

    console.log("Cupom Fiscal:");
    console.log(`Tipo de carne: ${tipoCarne}`);
    console.log(`Quantidade: ${quantidade} Kg`);
    console.log(`Preço total: R$ ${resultado.precoTotal.toFixed(2)}`);
    console.log(`Tipo de pagamento: ${cartaoTabajara ? "Cartão Tabajara" : "Outro meio"}`);
    console.log(`Desconto: R$ ${resultado.desconto.toFixed(2)}`);
    console.log(`Valor a pagar: R$ ${resultado.precoFinal.toFixed(2)}`);
}

main();
