/*
7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.
*/

import { getNumber } from "./functions.js";

function main() {
    const X = getNumber("enter a number: ");
while(true) {
    const input = getNumber("enter a other number to comparat whith the first number: ");
    if(input !== X) {
        console.log("please try again. ")
    } else {
        break;
     }
}
    
}
main();
