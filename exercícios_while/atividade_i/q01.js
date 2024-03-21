/*
1. Read a list of numbers and for each number read, write the number itself and the list of its
dividers. (flag number = 0).
*/

import { getNumber } from "./functions.js";

function main() {
    while (true) {
const number = getNumber("Enter a number to calculate its dividers, or enter '0' to break: ");
let divider = 1;

if (number === 0) {
    break;
}

console.log(`Dividers of ${number}: `);

while(divider <= number) {
    if (number % divider === 0) {
        console.log(`${divider}`)
    }
    divider ++;
}
divider = 1;
    }
}
main();