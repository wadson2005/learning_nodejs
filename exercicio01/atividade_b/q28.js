/*
28. Read a whole number of hours, calculate and write how many weeks, how many days and how many hours it
match.
*/

import { question } from "readline-sync";

let hours = question("enter a value of hours:");
hours = parseInt(hours);

//calculating
const weeks = Math.floor(hours / 168);
const days = Math.floor((hours % 168) / 24);
const remainingHours = hours % 24;

console.log(`${weeks} weeks, ${days} and ${remainingHours} hours.`);
