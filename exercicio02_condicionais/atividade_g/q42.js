import { question } from "readline-sync";

function verificarTipoNumero(numero) {
    const numeroString = numero.toString();

    if (numeroString.includes('.')) {
        console.log("O número é decimal.");
    } else {
        console.log("O número é inteiro.");
    }
}

function main() {
    const numero = parseFloat(question("Digite um número: "));
    verificarTipoNumero(numero);
}

main();
