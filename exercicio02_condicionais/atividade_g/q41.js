/*
11. Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do 
número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades
*/  
import { question } from "readline-sync";

function decomporNumero(numero) {
    if (numero < 0 || numero >= 1000) {
        return "Número fora do intervalo permitido.";
    }

    const centenas = Math.floor(numero / 100);
    const dezenas = Math.floor((numero % 100) / 10);
    const unidades = numero % 10;

    let resultado = "";
    if (centenas > 0) {
        resultado += centenas + (centenas === 1 ? " centena" : " centenas");
        if (dezenas > 0 && unidades > 0) {
            resultado += ", ";
        } else if(dezenas > 0 || unidades > 0) {
            resultado += " e ";
        }
    }

    if (dezenas > 0) {
        resultado += dezenas + (dezenas === 1 ? " dezena" : " dezenas");
        if (unidades > 0) {
            resultado += " e ";
        }
    }

    if (unidades > 0) {
        resultado += unidades + (unidades === 1 ? " unidade" : " unidades");
    }

    resultado += ".";
    
    return resultado;
}

function main() {
    const n = parseInt(question("Digite um número inteiro menor que 1000: "));
    const resultado = decomporNumero(n);
    console.log(resultado);
}

main();
