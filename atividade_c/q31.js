//31. Read an integer (4 binary digits), calculate and write the equivalent in decimal base.

import { question } from "readline-sync";

function binaryToDecimal(binary) {
  const decimal = parseInt(binary, 2);
  if (!isNaN(decimal)) {
    return decimal;
  } else {
    return "O valor informado não é um número binário válido.";
  }
}

var binaryNum = question("Enter a binary number to converte to a decimal number: ");

console.log(binaryToDecimal(binaryNum));
