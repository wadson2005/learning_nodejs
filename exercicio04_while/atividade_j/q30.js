/*
30. Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o 
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo 
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
*/

import {getString, getNumber} from "./functions.js";

function precificarProduto(preco, qtd) {
if(qtd <= 10) {
    return 0;
} else if(qtd <= 20) {
return 0.1 * preco * qtd;
} else if(qtd <= 50) {
    return 0.2 * preco * qtd;
} else if(qtd > 50) {
    return 0.25 * preco * qtd;
}
}

function main() {

while(true) {
const produto = getString("digite o nome do produto (ou fim para terminar): ");
if(produto === "fim") {
    break;
}

const preco = getNumber("digite o preço do produto: ");
const qtdProduto = getNumber(`quantidade de ${produto}: `);

const desconto = precificarProduto(preco, qtdProduto);
const precoFinal = qtdProduto * preco - desconto;

//exibindo
console.log(`O preço final para ${qtdProduto} ${produto} é R$${precoFinal.toFixed(2)} com um desconto de R$${desconto.toFixed(2)} `);
}
}
main();
