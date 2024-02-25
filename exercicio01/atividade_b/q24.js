//24. Read a value in m, calculate and write the equivalent in cm.

import { question } from "readline-sync";

let meters = question("`enter a value in meters to convert to centimeters:");
meters = parseFloat(meters);

//processing
const centimeters = meters * 100;

console.log(`${meters} meters converted to centimeters is equal to ${centimeters}.`);
