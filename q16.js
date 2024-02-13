//16. Read the value of the side of a square, calculate and write its area. (area = side ** 2

import { question } from "readline-sync";

//value input
let side = question("enter the value of square's side:")

//string to float
side = parseFloat(side);

//processing
const area = side ** 2;

console.log(`the square's area is ${area}`);
