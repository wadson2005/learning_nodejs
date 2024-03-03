/*
4. Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez.
*/

import { question } from "readline-sync";

function calcularMedia(a, b) {
    const media = (a + b) / 2;
    return media
}

function aprovacao(m) {
    if (m === 10) {
        return 'aprovado com distinção'
    } else if(m >= 7) {
        return 'aprovado'
    } else if (m < 7) {
        return 'Reprovado'
    } else {
        return 'Verifique os dados informados e tente novamente'
    }
}

function main() {
    const n1 = parseFloat(question("digite a primeira nota: "));
    const n2 = parseFloat(question("digite a segunda nota: "));

    const media = calcularMedia(n1, n2);

    const result = aprovacao(media);

    console.log(`Sua média é ${media} e sua situação é ${result}. `)
}
main();
