//15. Read the value of the base and height of a triangle, calculate and write its area. (area=(base * height)/2)

import { question } from "readline-sync";

//values input
let base = question("enter the value of triangle's base:");
let height = question("enter the value of triangle's height:");

//converting the strings to float
base = parseFloat(base);
height = parseFloat(height);

//calculating
const result = (base * height) / 2;

console.log(`The triangle's area is ${result}`);
