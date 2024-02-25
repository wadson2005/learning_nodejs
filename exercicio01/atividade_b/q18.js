//18. Read the value of the radius of a circle, calculate and write its length. (c = 2 * p * r)

import { question } from "readline-sync";

//input
let radiu = question("enter the circle's radiu to calculate the area:");
const pi = 3.14;

//str to float
radiu = parseFloat(radiu);

//processing
const area = 2 * pi * radiu;

console.log(`The circle's area is ${area}`);
