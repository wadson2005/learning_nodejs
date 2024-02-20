//36. Read a person's age expressed in years, months and days and write it expressed in days only.

import { question } from "readline-sync";

const years = parseInt(question("enter how many years you have: "));
const months = parseInt(question("ow many months: "));
const days = parseInt(question("and how many days: "));

//calculating the result
const result = years * 365 + months * 30 + days;

//displaying
console.log(` you've ever lived ${result} days!`);
