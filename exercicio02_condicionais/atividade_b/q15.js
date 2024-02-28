/*
15. Read the number of teaching hours given by two teachers and the hourly rate received by each one.
Write on the screen which of the teachers has the highest total salary.
*/

import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function calculateSalary(h, p) {
    return h * p;
}

function main() {
const hoursT1 = getNumber("enter the quantity of hours given by the first teacher: ");
const hoursPriceT1 = getNumber("enter the price by one hour to the first teacher: ");
console.log("now, the datas from the second teacher: ")
const hoursT2 = getNumber("Enter the quantity of hours given by the second teacher: ");
const hoursPriceT2 = getNumber("Enter the price by one hours to the second teacher: ");

const salaryT1 = calculateSalary(hoursT1, hoursPriceT1);
const salaryT2 = calculateSalary(hoursT2, hoursPriceT2);

if(salaryT1 > salaryT2) {
    console.log(`The teacher whith the largest salary is the first, who receives R$${salaryT1.toFixed(2)} on total! `);
} else {
    console.log(`The teacher whith the largest salary is the second, who receives R$${salaryT2.toFixed(2)} on total! `);
}
}
main();
