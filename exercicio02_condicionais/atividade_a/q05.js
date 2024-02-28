//5. Read 3 (three) numbers and write them in ascending order.
import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function sortNumbers(n1, n2, n3) {
    let smallest, middle, largest;

    if (n1 <= n2 && n1 <= n3) {
        smallest = n1;
        if (n2 <= n3) {
            middle = n2;
            largest = n3;
        } else {
            middle = n3;
            largest = n2;
        }
    } else if (n2 <= n1 && n2 <= n3) {
        smallest = n2;
        if (n1 <= n3) {
            middle = n1;
            largest = n3;
        } else {
            middle = n3;
            largest = n1;
        }
    } else {
        smallest = n3;
        if (n1 <= n2) {
            middle = n1;
            largest = n2;
        } else {
            middle = n2;
            largest = n1;
        }
    }

    return { smallest, middle, largest };
}

function main() {
    const num1 = getNumber("Enter the first number: ");
    const num2 = getNumber("Enter the second number: ");
    const num3 = getNumber("Enter the last number: ");

    const sortedNumbers = sortNumbers(num1, num2, num3);

    console.log(`Sorted numbers in ascending order: ${sortedNumbers.smallest}, ${sortedNumbers.middle}, ${sortedNumbers.largest}`);
}

main();
