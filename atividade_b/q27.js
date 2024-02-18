/*
27. Read a whole number of seconds, calculate and write how many hours, how many minutes and how many
seconds it matches.
*/

import { question } from "readline-sync";

const totalSeconds = question(`enter a value in seconds to convert to hours, minuts and seconds:`);

//converting to int
const seconds = parseInt(totalSeconds);

//calculate
const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds % 3600) /60);
const remainingSeconds = seconds % 60;

console.log(`${hours} hours, ${minutes} minuts and ${remainingSeconds} seconds.`);
