//2. Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.
import { question } from "readline-sync";

function whatSex(s) {
if(s === 'F') {
    return 'Feminino'
} else if(s === 'M') {
return 'Masculino'
} else{
    return "Opção inválida"
}
}

function main() {
    const sexo = question("digite 'F' para feminino, ou 'M' para masculino: ").toUpperCase();

    console.log(whatSex(sexo));
}
main();
