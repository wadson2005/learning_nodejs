//33. Read a whole number (3 digits), calculate and write the sum of the number and its inverse.

import { question } from "readline-sync";

const number = parseInt(question("Enter a 3-digit number: "));

// inverse
const thirdDigit = Math.floor(number / 100);
const secondDigit = Math.floor((number % 100) / 10);
const firstDigit = number % 10;

const inverse = firstDigit * 100 + secondDigit * 10 + thirdDigit;

// calculating the sum
const sum= number + inverse;

//displaying
console.log(`${sum}`);
