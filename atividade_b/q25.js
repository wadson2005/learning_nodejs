//25. Read a whole number of meters, calculate and write how many km and how many meters it corresponds to.

import { question } from "readline-sync";

let meters = question("enter a value in meters to convert to kilometers and to see the remaining meters:");
meters = parseFloat(meters);

//calculating
if(meters >= 1000) {
    const km = Math.floor(meters / 1000);
    const remainingMeters = meters % 1000;

    console.log(`the value entered and converted to km is equal to ${km} kilometers and ${remainingMeters} meters!`);
} else {
    let km = meters / 1000;
    //km = km.toFixed(2);

    console.log(`the value entered is less than 1 kilometers (${km}) kilometers and there not remaining meters`)
}
