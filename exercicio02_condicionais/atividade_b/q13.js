import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function largestAndSmallest(num1, num2, num3, num4, num5) {
    let smallest = num1 < num2 ? num1 : num2;
    smallest = smallest < num3 ? smallest : num3;
    smallest = smallest < num4 ? smallest : num4;
    smallest = smallest < num5 ? smallest : num5;

    let largest = num1 > num2 ? num1 : num2;
    largest = largest > num3 ? largest : num3;
    largest = largest > num4 ? largest : num4;
    largest = largest > num5 ? largest : num5;

    return { largest, smallest };
}

function main() {
    console.log("Enter 5 numbers to get the largest and smallest among them: ");
    const n1 = getNumber("First number: ");
    const n2 = getNumber("Second number: ");
    const n3 = getNumber("Third number: ");
    const n4 = getNumber("Fourth number: ");
    const n5 = getNumber("Finally, the last number: ");

    const { largest, smallest } = largestAndSmallest(n1, n2, n3, n4, n5);

    console.log(`The largest number is ${largest} and the smallest is ${smallest}.`);
}

main();
