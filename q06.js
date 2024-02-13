import { question } from "readline-sync";

let kmh = question("digite uma velocidade em KM/H:");
let km = parseFloat(kmh);
let result = km / 3.6;
const formated = result.toFixed(2);

console.log(`A velocidade informada convertida para M/S é igual ${formated}`);