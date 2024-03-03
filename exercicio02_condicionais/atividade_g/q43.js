/*
13. Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/

import { question } from "readline-sync";

function fazerPergunta(pergunta) {
    return question(`${pergunta} (S/N) `).toUpperCase() === 'S';
}

function contarRespostasPositivas() {
    let respostasPositivas = 0;

    if (fazerPergunta("Telefonou para a vítima?")) respostasPositivas++;
    if (fazerPergunta("Esteve no local do crime?")) respostasPositivas++;
    if (fazerPergunta("Mora perto da vítima?")) respostasPositivas++;
    if (fazerPergunta("Devia para a vítima?")) respostasPositivas++;
    if (fazerPergunta("Já trabalhou com a vítima?")) respostasPositivas++;

    return respostasPositivas;
}

function emitirClassificacao(respostasPositivas) {
    if (respostasPositivas === 2) {
        return "Suspeita";
    } else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
        return "Cúmplice";
    } else if (respostasPositivas ===    5) {
        return "Assassino";
    } else {
        return "Inocente";
    }
}

function main() {
    const respostasPositivas = contarRespostasPositivas();
    const classificacao = emitirClassificacao(respostasPositivas);

    console.log(classificacao);
}

main();
