//3. Read 3 (three) numbers, check and write the largest among the numbers read.
import { question } from "readline-sync";

function getNumber(message) {
const input = question(message);
const n = Number(input);
return n;
}

function largestNumber(a, b, c) {
    let largest = 0;
    if(a > largest) {
        largest = a;
    }
    if(b > largest) {
        largest = b;
    }
    if (c > largest) {
    largest = c;
}
return largest;
}

function main() {
    const n1 = getNumber("enter the first number: ");
    const n2 = getNumber("enter the second number: ");
    const n3 = getNumber("enter the last number: ");

    const largest = largestNumber(n1, n2, n3);

    console.log(`the largest number amon the numbers entered is ${largest}`);

}
main();
