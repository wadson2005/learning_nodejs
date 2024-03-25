import { getNumber } from "./functions.js";

function main() {
    const r = getNumber("digite a razão da pg: ");
    const a1 = getNumber("insira o primeiro termo da pg (a1): ");
    const n = getNumber("digite a quantidade de termos que deseja exibir (n): ");

    let temp = a1;
    let contador = 0;
while(contador < n) {
console.log(`termo ${contador + 1}: ${temp} `);
temp *= r;
contador ++;
}
}
main();
