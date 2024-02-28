//12. Read 1 (one) whole number and write whether this number is even or odd.

import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function isEven(n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function main() {
    const number = getNumber("enter a number to verify if it is a odd or even number: ");

console.log(`the number entered is ${isEven(number)}`);
}
main();