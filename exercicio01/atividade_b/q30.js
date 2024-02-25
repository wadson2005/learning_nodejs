/*
30. Read a whole number of minutes, calculate and write how many days, how many hours and how many minutes it
corresponds.
*/

import { question } from "readline-sync";

let minutes = question("enter a number of minutes:");

//converting
minutes = parseInt(minutes);

//calculating
const days = Math.floor(minutes / 1440);
const hours = Math.floor((minutes % 1440) / 24);
const remainingMinutes = minutes % 60;
console.log(`${days} days, ${hours} hours and ${remainingMinutes} minutes.`);

