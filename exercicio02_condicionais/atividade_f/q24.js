import { question } from "readline-sync";

// Função para calcular as raízes da equação de segundo grau
function calcularRaizes(a, b, c) {
    const delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        return "A equação não possui raízes reais.";
    }

    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    return delta === 0 ? `A equação possui uma raiz real: ${raiz1}` :
                         `A equação possui duas raízes reais: ${raiz1} e ${raiz2}`;
}

// Função principal
function main() {
    // Solicitar os coeficientes da equação de segundo grau
    let a = parseFloat(question("Digite o coeficiente A (diferente de zero): "));
    let b = parseFloat(question("Digite o coeficiente B: "));
    let c = parseFloat(question("Digite o coeficiente C: "));

    // Calcular e exibir as raízes
    const resultado = calcularRaizes(a, b, c);
    console.log(resultado);
}

// Chamar a função principal
main();
