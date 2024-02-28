//14. Read 5 (five) whole numbers, calculate their average and write those that are greater than the average.

import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function average(num1, num2, num3, num4, num5) {
    const result_average = (num1 + num2 + num3 + num4 + num5) / 5;
    return result_average;
}

function greater_average(a, num1, num2, num3, num4, num5) {
if(num1 > a) {
    console.log(num1);
}
if(num2 > a) {
    console.log(num2);
}
if (num3 > a){
    console.log(num3);
}
if(num4 > a) {
    console.log(num4);
}
if(num5 > a) {
    console.log(num5);
}
}

function main() {
    console.log("Enter 5 numbers to calculate the average and see whitch numbers are greater than average. ");
const n1 = getNumber("first number: ");
const n2 = getNumber("Second number: ");
const n3 = getNumber("tird number: ");
const n4 = getNumber("fourth number: ");
const n5 = getNumber("fifth number: ");

const result_av = average(n1, n2, n3, n4, n5);
console.log(`The average is ${result_av} and the numbers grater than average are: `)
greater_average(result_av, n1, n2, n3, n4, n5);
}
main();
