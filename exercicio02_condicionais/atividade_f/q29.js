import { question } from "readline-sync";

// Função para verificar se um número é um quadrado perfeito
function verificaQuadradoPerfeito(numero) {
    // Calcular a raiz quadrada do número
    let raiz = Math.sqrt(numero);

    // Extrair os dois primeiros e dois últimos dígitos
    let doisPrimeiros = Math.floor(numero / 100);
    let doisUltimos = numero % 100;

    // Verificar se a raiz quadrada é igual à soma dos dois primeiros e dois últimos dígitos
    return raiz === doisPrimeiros + doisUltimos;
}

// Função principal
function main() {
    // Solicitar um número de 4 dígitos
    let numero = parseInt(question("Digite um número de 4 dígitos: "));

    // Verificar se é um quadrado perfeito
    if (numero >= 1000 && numero <= 9999) {
        if (verificaQuadradoPerfeito(numero)) {
            console.log(`${numero} é um quadrado perfeito.`);
        } else {
            console.log(`${numero} não é um quadrado perfeito.`);
        }
    } else {
        console.log("Por favor, insira um número de 4 dígitos.");
    }
}

// Chamar a função principal
main();
