//14. Read 3 grades from a student and the weight of each grade, calculate and write the weighted average.

import { question } from "readline-sync";

//grades input
let g1 = question("Write the fist grade:");
let g2 = question("write the second grade:");
let g3 = question("Write the third grade:");

//weight grades input
let w1 = question("enter the weight value of the first grade:");
let w2 = question("enter the weight value of the second grade");
let w3 = question("Now, enter the weight value of the last grade");

//converting to float
g1 = parseFloat(g1);
g2 = parseFloat(g2);
g3 = parseFloat(g3);
w1 = parseFloat(w1);
w2 = parseFloat(w2);
w3 = parseFloat(w3);

//calculating
const result = ((g1 * w1) + (g2 * w2) + (g3 * w3)) / 3;

console.log(`The wighted average is ${result}`);
