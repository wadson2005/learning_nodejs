import { question } from "readline-sync";

// Função para realizar o arredondamento
function arredondarNumero(numero) {
    // Extrair a parte decimal do número
    const parteDecimal = numero - ~~numero;

    // Verificar se a parte decimal é maior ou igual a 0.5
    if (parteDecimal >= 0.5) {
        // Arredondar para o inteiro imediatamente superior
        return ~~numero + 1;
    } else {
        // Arredondar para o inteiro imediatamente inferior
        return ~~numero;
    }
}

// Função principal
function main() {
    // Solicitar o número com parte decimal
    let numero = parseFloat(question("Digite um número com parte decimal: "));

    // Realizar o arredondamento e exibir o resultado
    let resultado = arredondarNumero(numero);
    console.log(`O número arredondado é: ${resultado}`);
}

// Chamar a função principal
main();
