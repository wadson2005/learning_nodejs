/*
17. Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um 
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais 
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').
*/

import { getNumber, getString } from "./functions.js";

function main() {
    let nomeMaisAlta = "";
    let alturaMaisAlta = Number.MIN_VALUE;
    let nomeMaisBaixa = "";
    let alturaMaisBaixa = Number.MAX_VALUE;
    let nomeMaisMagra = "";
    let pesoMaisMagra = Number.MAX_VALUE;
    let nomeMaisGorda = "";
    let pesoMaisGorda = Number.MIN_VALUE;

    while(true) {
            let nome = getString("digite o nome da participante: ");
            if(nome === 'fim') {
                break;
            }

            let altura = getNumber("Digite a altura da participante: ");
            let peso = getNumber("Por fim, digite o peso: ");

            if(altura > alturaMaisAlta) {
                nomeMaisAlta = nome;
                alturaMaisAlta = altura;
            }

            if(altura < alturaMaisBaixa) {
                alturaMaisBaixa = altura;
                nomeMaisBaixa = nome;
            }
            
            if(peso < pesoMaisMagra) {
                nomeMaisMagra = nome;
                pesoMaisMagra = peso;
            }
            if(peso > pesoMaisGorda) {
                pesoMaisGorda = peso;
                nomeMaisGorda = nome;
            }
        }

            console.log(`Candidata mais alta: ${nomeMaisAlta}, altura: ${alturaMaisAlta};`);
            console.log(`Candidata mais baixa: ${nomeMaisBaixa}, altura: ${alturaMaisBaixa};`);
            console.log(`Candidata mais magra: ${nomeMaisMagra}, peso: ${pesoMaisMagra};`);
            console.log(`Candidata mais gorda: ${nomeMaisGorda}, peso: ${pesoMaisGorda};`);

}
main();