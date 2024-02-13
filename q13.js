import { question } from "readline-sync";

//13. Read a value in reais (R$), calculate and write 70% of this value.

let reais = question("Write a value in reais to see 70 % from it:");
parseFloat(reais);
let result = 0.7 * reais;
result = result.toFixed(2);

console.log(`70% of the entered value is R$${result}`);
