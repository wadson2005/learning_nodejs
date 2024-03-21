//2. Read 2 (two) numbers, calculate and write the mmc (least common multiple) between the numbers read.

import { getNumber } from "./functions.js";

function main() {
    //main loop
    while (true) {
        //inputs
const num1 = getNumber("enter the first number: ");
const num2 = getNumber("enter the second number: ");
let result = num1 * num2;

//shoing the mmc
console.log(`the mmc betwin the two numbers entered is ${result}. `)

//choice to calculate again or exit the program
const choice = getNumber("enter 1 to enter new numbers, or 2 to exit: ");
if(choice === 2) {
    break;
}
}

}
main();