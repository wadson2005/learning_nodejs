import { question } from "readline-sync";

/*
19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea 
(IMC = peso / altura2
). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso 
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
*/
function getNumber(msg) {
    return parseFloat(question(msg));
}

function calculateImc(h, w) {
    const imc = w / h ** 2;
    return imc;
}
function youAre(imc) {
    if(imc < 25) {
        console.log("Normal weight! ")
    }
    if((imc > 25) && (imc < 30)) {
        console.log("obese");
    }
    if(imc > 30) {
        console.log("morbid obese. ")
    }
}

function main() {
    const height = getNumber("enter your height: ");
 const weight = getNumber("enter your weight: ");

 const resultImc = calculateImc(height, weight);

 youAre(resultImc);

}
main();
