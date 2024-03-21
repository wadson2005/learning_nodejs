/*
4. Read a number and divide it by two (successively) until the result is less than 1. Write the
result of the last division performed.
*/

// Import the getNumber function from the functions.js file
import { getNumber } from "./functions.js";

// Function to divide the number by two successively until the result is less than 1
function divideLessThan1(n) {
    while (n >= 1) {
        n = n / 2; 
    }
    return n;
}

// Main function
function main() {
    const num = getNumber("Enter a number to divide it until the result is less than 1: ");

    const result = divideLessThan1(num);

    console.log(`${result}`);
}
main();
