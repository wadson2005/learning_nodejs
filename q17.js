//17. Read the value of the base and height of a rectangle, calculate and write its area. (area = base * height)

import { question } from "readline-sync";

//values input
let base = question("enter the value of retangle's base:");
let height = question("enter the value of the triangle's height:");

//converting the values to float
base = parseFloat(base);
height = parseFloat(height);

//processing
const result = base * height;

console.log(`the retangle's area is ${result}`);