//3. Leia uma letra e verifique se a letra digitada é vogal ou consoante.
import { question } from "readline-sync";

function vogalOuConsoante(l) {
    if('AEIOU'.includes(l)) {
        return 'vogal'
    } else if('BCDFGHJKLMNPQRSTVWXYZÇ'.includes(l)) {
        return 'consoante'
    } else {
        return 'caractere inválido'
    }
}

function main() {
    const letra = question("digite uma letra e veja se é uma consoante ou vogal: ").toUpperCase();

const result = vogalOuConsoante(letra)
console.log(`A letra informada é uma ${result}. `);
}
main();
