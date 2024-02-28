import { question } from "readline-sync";

/*
17. Read integer values into two distinct variables, and if the remainder of the division of the first by the second is 1, write the sum of these variables plus the remainder of the division. If it is 2, write whether the first and second values are even or odd. If it is equal to 3, multiply the sum of the values read by the first. If it is equal to 4, divide the sum of the numbers read by the second, if it is different from zero. In any other situation, write the square of the numbers read.
*/

function getNumber(msg) {
    return Number(question(msg))
}

function remainder1(a, b) {
    return a + b + 1;
}

function remainder2(a, b) {
    let result = "";
    if ((a % 2 === 0) && b % 2 === 0) {
        result = "The remainder of the division is equal to two and the two numbers entered are even."
    } else if ((a % 2 === 1) && (b % 2 === 1)) {
        result = "The remainder of the division is equal to two and the two numbers entered are odd."
    } else if ((a % 2 === 0) && (b % 2 === 1) || (a % 2 === 1) && (b % 2 === 0)) {
        result = "The remainder of the division is equal to two, and one of the two numbers entered is even and the other number is odd."
    }
    return result;
}

function remainder3(a, b) {
    return a * (a + b)
}

function remainder4(a, b) {
    if (b !== 0) {
        return (a + b) / b;
    } else {
        return "b = 0"
    }
}

function remainderDiferent(a, b) {
    const x = a ** 2;
    const y = b ** 2;
    return [x, y];
}

function main() {
    console.log(`according to the result of the remainders of the divisions, the following operations will be performed:
    - remainder 1: x1 + x2 + 1;
    - remainder 2: it'll display if the numbers entered are even or odd;
    - remainder 3: x1 * (x1 + x2);
    - remainder 4: (x1 + x2) / x2 (if x2 diferent 0);
    - others remainders: shows the square of the entered numbers.
    `)

    const n1 = getNumber("enter the first number: ");
    const n2 = getNumber("enter the second number: ");

    if (n1 % n2 === 1) {
        console.log(`the remainder of the division of the two numbers entered is 1 and the result from it is ${remainder1(n1, n2)}. `);
    } else if (n1 % n2 === 2) {
        console.log(`the remainder of the division is 2 and the result to this value is ${remainder2(n1, n2)}. `);
    } else if (n1 % n2 === 3) {
        console.log(`the remainder of this division is 3 and the result from this operation is ${remainder3(n1, n2)}. `);
    } else if (n1 % n2 === 4) {
        const result = remainder4(n1, n2);
        console.log(`The remainder of this division is 4, and the result from this operation is ${result}. `);
    } else if ((n1 % n2 === 0) || (n1 % n2 > 4)) {
        const [num1, num2 ] = remainderDiferent(n1, n2);
        console.log(`the result of this division is diferent , and the result to this operation is ${num1} and ${num2}`);
    }
}

main();
