//37. Read a person's age expressed in days and write it expressed in years, months and days.

import { question } from "readline-sync";

const days = parseInt(question("enter how many days you have ever lived: "));

//calculating
const years = Math.floor(days / 360);
const months = Math.floor((days % 360) / 30);
const Days = days % 30;

//displaying
console.log(`You've ever lived ${years} years, ${months} months and ${Days} days!`);
