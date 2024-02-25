//2. Read 2 (two) numbers, check and enter the smallest and largest among the numbers read.

import { question } from "readline-sync";

function getNumber(msg) {
    const input = question(msg);
    const x = Number(input);
    return x;
}

function largestNumber(x, y) {
    let smallet = 0;
    let largest = 0;
    if (x > y) {
        largest = x;
        smallet = y;
        return {smallet, largest};
    } else {
        largest = y;
        smallet = x;
return {largest, smallet};
    }
}

function main() {
    const n1 = getNumber("Type the first number: ");
    const n2 = getNumber("type the second number: ");

    const {largest, smallet} = largestNumber(n1, n2);

console.log(`the largest number is ${largest} and the smallet is ${smallet}`);
}
main();
