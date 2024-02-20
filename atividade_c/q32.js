//32. Read a whole number (3 digits), calculate and write the difference between the number and its inverse.

import { question } from "readline-sync";

const number = parseInt(question("Enter a 3-digit number: "));

// inverse
const thirdDigit = Math.floor(number / 100);
const secondDigit = Math.floor((number % 100) / 10);
const firstDigit = number % 10;

const inverse = firstDigit * 100 + secondDigit * 10 + thirdDigit;

// calculating the diferense
const difference = number - inverse;

// displaying
console.log(`Difference: ${difference}`);
