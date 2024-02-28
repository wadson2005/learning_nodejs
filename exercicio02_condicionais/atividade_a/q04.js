/*4. Read 1 (one) 2 (two) digit number, check and write if the tens digit is the same or different
of the unit digit.
*/

import { question } from "readline-sync";

function getNumber(message) {
    const UserInput = question(message);
    const num = Number(UserInput)
    return num;
}

function areEquais(x) {
    const dozens = Math.floor(x / 10);
    const units = x % 10;
return dozens === units;
}

function main() {
const number = getNumber("enter a number to verify if the digits (only two digits) are equais: ");
const result = areEquais(number);

const show = result ? "the entered numbers are equais!" : "the entered numbers aren't equais!"

console.log(`${show}`);
}
main();