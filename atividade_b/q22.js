//22. Read a value in km, calculate and write the equivalent in m.

import { question } from "readline-sync";

let km = question("enter a value in kilometers to convert to meters:");
km = parseFloat(km);

const m = km * 1000;

console.log(`the distance entered in kilometers is equal to ${m} meters.`);
