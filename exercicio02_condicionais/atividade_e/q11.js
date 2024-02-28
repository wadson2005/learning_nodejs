//Read four numbers (option, num1, num2, num3) and print the value corresponding to the option: num1 if option to 1, num2 if option to 2, and num3 if option to 3.

import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function result(option, num1, num2, num3) {
    if(option === 1) {
        return num1;
    } else if(option === 2) {
            return num2;
        } if(option === 3) {
                return num3;
    }
}

function main() {
 const option = getNumber("enter the option: ");
 const num1 = getNumber("enter the first number: ");
 const num2 = getNumber("enter the second number: ");
 const num3 = getNumber("enter the third number: ");

 console.log(result(option, num1, num2, num3));
}
main();