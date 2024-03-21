//3. Read 2 (two) numbers, calculate and write the gcd (greatest common divisor) between the numbers read.

import { getNumber } from "./functions.js";

// Function to calculate the Greatest Common Divisor (GCD) of two numbers
function calculateGcd(a, b) {
    // While the second number (b) is not equal to zero
    while(b !== 0) {
        // Store the value of b in a temporary variable
        let temp = b;
        // Update b with the remainder of the division of a by b
        b = a % b;
        // Update a with the stored temporary value
        a = temp;
    }
    // Return the value of a, which is the calculated GCD
    return a;
}

// Main function
function main() {
    // Get the first number entered by the user
    const num1 = getNumber("Type the first number: ");
    // Get the second number entered by the user
    const num2 = getNumber("Type the second number: ");

    // Calculate the GCD of the two numbers using the calculateGcd function
    const result = calculateGcd(num1, num2);

    // Display the result of the GCD calculation
    console.log(`The GCD between ${num1} and ${num2} is: ${result}`);
}
main();
