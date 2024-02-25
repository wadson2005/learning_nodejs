//21. Read a temperature in °F, calculate and write the equivalent in °C. (t°C = (5 * t°F - 160) / 9).

import { question } from "readline-sync";

let f = question("type a temperature in °F to convert to °C:");
f = parseFloat(f);

//calculating
const c = (5 * f - 160) / 9;

console.log(`The temperature converted to °C is ${c}`);
