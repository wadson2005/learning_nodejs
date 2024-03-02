/*
27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu 
nascimento e a data (dia, mês e ano) atual.
*/

import { question } from "readline-sync";

// Função para calcular a idade em anos, meses e dias
function calcularIdade(diaNascimento, mesNascimento, anoNascimento, diaAtual, mesAtual, anoAtual) {
    let anos = anoAtual - anoNascimento;
    let meses = mesAtual - mesNascimento;
    let dias = diaAtual - diaNascimento;

    // Verificar e ajustar a idade
    if (dias < 0) {
        meses--;
        dias += 30; // Assumindo um mês de 30 dias
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return { anos, meses, dias };
}

// Função principal
function main() {
    // Solicitar a data de nascimento
    let diaNascimento = parseInt(readlineSync.question("Digite o dia de nascimento: "));
    let mesNascimento = parseInt(readlineSync.question("Digite o mês de nascimento: "));
    let anoNascimento = parseInt(readlineSync.question("Digite o ano de nascimento: "));

    // Solicitar a data atual
    let diaAtual = parseInt(readlineSync.question("Digite o dia atual: "));
    let mesAtual = parseInt(readlineSync.question("Digite o mês atual: "));
    let anoAtual = parseInt(readlineSync.question("Digite o ano atual: "));

    // Calcular e exibir a idade
    const idade = calcularIdade(diaNascimento, mesNascimento, anoNascimento, diaAtual, mesAtual, anoAtual);
    console.log(`Idade: ${idade.anos} anos, ${idade.meses} meses, ${idade.dias} dias.`);
}

// Chamar a função principal
main();
