/*8. Read current date (day, month and year) and date of birth (day, month and year) of a person, calculate and write
your exact age (in years).
*/

import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function age(cd, cm, cy, bd, bm, by) {
let age = cy - by;
if (cm < bm || (cm === bm && cd < bd)) {
    age = age - 1;
}
return age;
}

function main() {
    console.log("Enter the current date: ")
    const currentDay = getNumber("day: ");
    const currentMonth = getNumber("month: ");
    const currentYear = getNumber("year: ");

    console.log("In the folloing inputs, enter the date of your birth ");
    const birthDay = getNumber("day: ");
    const birthMonth = getNumber("month: ")
    const birthYear = getNumber("year: ");

    const result = age(currentDay, currentMonth, currentYear, birthDay, birthMonth, birthYear);

    console.log(`you're ${result} years old! `);

}
main();
