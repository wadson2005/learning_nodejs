/*
28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de 
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área 
não pode ser negativo.
*/
// Importar a biblioteca readline-sync
import { question } from "readline-sync";

// Função para calcular a largura do retângulo
function calcularLargura(x1, x2) {
    return Math.abs(x2 - x1);
}

// Função para calcular a altura do retângulo
function calcularAltura(y1, y2) {
    return Math.abs(y2 - y1);
}

// Função para calcular a área do retângulo
function calcularArea(x1, y1, x2, y2) {
    let largura = calcularLargura(x1, x2);
    let altura = calcularAltura(y1, y2);
    return largura * altura;
}

// Função principal
function main() {
    // Solicitar as coordenadas dos pontos
    let x1 = parseFloat(question("Digite a coordenada x do primeiro ponto: "));
    let y1 = parseFloat(question("Digite a coordenada y do primeiro ponto: "));
    let x2 = parseFloat(question("Digite a coordenada x do segundo ponto: "));
    let y2 = parseFloat(question("Digite a coordenada y do segundo ponto: "));

    // Calcular a área do retângulo
    let area = calcularArea(x1, y1, x2, y2);

    // Verificar se a área é negativa
    if (area >= 0) {
        console.log("A área do retângulo é:", area);
    } else {
        console.log("A área do retângulo não pode ser negativa. Verifique as coordenadas fornecidas.");
    }
}

// Chamar a função principal
main();
