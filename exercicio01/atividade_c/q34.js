//34. Read 3 numbers, calculate and write the average of the numbers.

import { question } from "readline-sync";

const n1 = parseInt(question("enter the first number: "));
const n2 = parseInt(question("enter the second number: "));
const n3 = parseInt(question("enter the last number: "));

//calculating the average
const average = (n1 + n2 + n3) / 3;

//displaying the result
console.log(`the average of thre numbers entered is ${average}`);
