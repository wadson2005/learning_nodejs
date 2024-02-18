//29. Read a whole number of months, calculate and write how many years and how many months it corresponds.

import {question} from "readline-sync"

let months = question("enter a number of months:");
months = parseInt(months);

//calculating
if (months >= 12) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    console.log(`${years} years and ${remainingMonths} months!`);
} else {
    console.log(`${months} months.`);
}
