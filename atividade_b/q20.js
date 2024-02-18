//20. Read a temperature in °C, calculate and write the equivalent in °F. (t°F = (9 * t°C + 160) / 5)

import { question } from "readline-sync";

//temperature input
let c = question(`enter a temperature in °C to convert to °F`);

//string to float
c = parseFloat(c);

//processing
const f = (9 * c + 160) / 5;

console.log(`The temperature converted from °C to °F is ${f}`);
