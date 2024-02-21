//d = raiz (x2 - x1)² + (y2 - y1)²

import { question } from "readline-sync";

//inputs
const x1 = parseFloat(question("enter the value to x1: "));
const y1 = parseFloat(question("enter the value to y1: "));
const x2 = parseFloat(question("now, the value para x2: "));
const y2 = parseFloat(question("finaly, enter the value to y2: "));

//calculating
const d1 = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

//displaying
console.log(`The distance between the points is ${d1.toFixed(1)} `);
