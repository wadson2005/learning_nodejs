/*
10. Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento Conceito
Entre 9.0 e 10.0 A
Entre 7.5 e 9.0 B
Entre 6.0 e 7.5 C
Entre 4.0 e 6.0 D
Entre 4.0 e zero E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/

import { question } from "readline-sync";

function calcularMedia(n1, n2) {
    const media = (n1 + n2) / 2;
    return media;
}

function definirConceito(m) {
    let conceito;
if (m >= 9.0 && m <= 10.0) {
    conceito = 'A';
} else if(m >= 7.5) {
    conceito = 'B';
} else if(m > 6.0) {
    conceito = 'C';
} else if(m >= 4.0) {
    conceito = 'D';
} else if(m >= 0) {
    conceito = 'E';
}
return conceito;
}

function aprovacao(conceito) {
    if (conceito === 'A' || conceito === 'B' || conceito === 'C') {
        return 'aprovado'
    } else{
        return 'reprovado'
    }
}

function main() {
 const n1 = parseFloat(question("digite a primeira nota: "))   ;
 const n2 = parseFloat(question("digite a segunda nota: "));

 const media = calcularMedia(n1, n2);
const conceito = definirConceito(media) ;
const result = aprovacao(conceito);

 //exibindo
 console.log(`1ª nota: ${n1};
 2ª nota: ${n2};
média: ${media};
conceito: ${conceito};
situação: ${result}!
 `)
}

main();

