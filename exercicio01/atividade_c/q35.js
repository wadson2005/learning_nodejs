//35. Read an integer (4 digits), calculate and write the sum of the elements that make it up.

import { question } from "readline-sync";

const number = parseInt(question("enter a number to sum the elements that make it up: "));

//getting each digit
const firstDigit = Math.floor(number / 1000);
const secondDigit = Math.floor((number % 1000) / 100);
const thirdDigit = Math.floor((number % 100) / 10);
const fourthDigit = number % 10;

//calculating the sum
const sumOfDigits = firstDigit + secondDigit + thirdDigit + fourthDigit;

//displaying the result
console.log(`the result of the sum is ${sumOfDigits}`);
