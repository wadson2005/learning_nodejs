/*
19. Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.º de identificação e seu 
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.º de identificação e o peso do 
boi mais magro e do boi mais gordo. (Flag: n.º identificação=0)
*/ 

import {getNumber} from "./functions.js"

function main() {
    let pesoMaisGordo = Number.MIN_VALUE;
    let pesoMaisMagro = Number.MAX_VALUE;
let identMaisGordo = 0;
let identMaisMagro = 0;

while(true) {
const NIdent = getNumber("Digite o número de identificação do boi (0 para sair): ");
if(NIdent === 0) {
    break;
}

const peso = getNumber(`Digite o peso do boi ${NIdent}: `);

if(peso > pesoMaisGordo) {
    pesoMaisGordo = peso;
    identMaisGordo = NIdent;
}

if(peso < pesoMaisMagro) {
    pesoMaisMagro = peso;
    identMaisMagro = NIdent;
}
}

console.log(`boi mais gordo: ${identMaisGordo}, peso: ${pesoMaisGordo.toFixed(2)} Kg; `);
console.log(`boi mais magro: ${identMaisMagro}, peso: ${pesoMaisMagro.toFixed(2)} Kg. `);

}

main();
