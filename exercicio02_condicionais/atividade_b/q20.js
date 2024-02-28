import { question } from "readline-sync";

/*
20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou 
quarto) em que o ângulo se localiza.
*/

function getNumber(msg) {
    return Number(question(msg))
}

function typeAngle(a) {
    let result = "";
    if (a < 90) {
        result = "first quadrant. ";
    } else if (a < 180) {
        result = "second quadrant. ";
    } else if(a < 270) {
        result = "tird quadrant. ";
    } else if(a < 360) {
result = "fourth quadrant. ";
    } else {
        result = "invalid value. ";
    }
    return result;
}

function main() {
    const angle = getNumber("enter the angle: ");
    
const resultAngle = typeAngle(angle);
console.log(`${resultAngle}`);

}

main();
