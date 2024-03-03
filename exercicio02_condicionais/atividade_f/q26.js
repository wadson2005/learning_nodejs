import { question } from "readline-sync";

// Função para calcular a hipotenusa
function calcularHipotenusa(cateto1, cateto2) {
    return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
}

// Função principal
function main() {
    // Solicitar os três lados do triângulo
    let lado1 = parseFloat(question("Digite o valor do primeiro lado: "));
    let lado2 = parseFloat(question("Digite o valor do segundo lado: "));
    let lado3 = parseFloat(question("Digite o valor do terceiro lado: "));

    // Verificar se os lados formam um triângulo retângulo
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        // Identificar os catetos e a hipotenusa
        let cateto1, cateto2, hipotenusa;

        if (lado1 > lado2 && lado1 > lado3) {
            hipotenusa = lado1;
            cateto1 = lado2;
            cateto2 = lado3;
        } else if (lado2 > lado1 && lado2 > lado3) {
            hipotenusa = lado2;
            cateto1 = lado1;
            cateto2 = lado3;
        } else {
            hipotenusa = lado3;
            cateto1 = lado1;
            cateto2 = lado2;
        }

        console.log("Os catetos do triângulo são:", cateto1, "e", cateto2);
        console.log("A hipotenusa do triângulo é:", hipotenusa);
    } else {
        console.log("Os lados fornecidos não formam um triângulo válido.");
    }
}

// Chamar a função principal
main();
