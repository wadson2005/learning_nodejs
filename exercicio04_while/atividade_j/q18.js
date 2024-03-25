/*
18. Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de 
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes, 
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão 
necessários, para que a população da cidade A ultrapasse a população da cidade B.
*/

function main () {
let populacaoA = 200000;
const crescimentoPopulacaoA = 0.035;
let populacaoB = 800000;
const crescimentoPopulacaoB = 0.0135;

let qtdAnos = 0;
while(populacaoA < populacaoB) {
populacaoA += populacaoA * crescimentoPopulacaoA;
populacaoB += populacaoB * crescimentoPopulacaoB;
qtdAnos ++;
}

console.log(`a população A levará ${qtdAnos} anos para igualar com a quantidade de habitantes da população B. `);
}
main();
