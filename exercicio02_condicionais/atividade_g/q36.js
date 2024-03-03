/*
6. Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

import { question } from "readline-sync";
function saudacao(t) {
    if(t === 'M') {
        return 'Bom dia!'
    } else if(t === 'V') {
        return 'Boa tarde!'
    } else if(t === 'N') {
        return 'Boa noite!'
    } else {
        return 'opção inválida. '
    }
}

function main() {
    const turno = question("digite M para matutino, V para vespertino, ou N para noturno: ").toUpperCase();
    
    console.log(saudacao(turno));
}

main();
