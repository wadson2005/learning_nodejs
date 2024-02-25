/*
38. Read 2 (two) fractions (numerator and denominator), calculate and write the sum of these fractions, writing the
result in fraction form.
*/

import { question } from "readline-sync";

const n1 = parseInt(question("enter the numerator of the first fraction: "));
const d1 = parseInt(question("enter the denominator of the fist fraction: "));
const n2 = parseInt(question("enter the numerator of the second fraction: "));
const d2 = parseInt(question("enter the the denominator of the second fraction: "));

//calculating the mmc
const mmc = d1 * d2;

//seting the new fractions
const newN1 = n1 * (mmc / d1);
const newN2 = n2 * (mmc / d2);

const sumNumerators = newN1 + newN2;

//showing the result
console.log(`the result of the sum of the fractions is ${sumNumerators}/${mmc} `);
