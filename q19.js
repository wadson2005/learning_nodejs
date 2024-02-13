/*
19. Read the radius of a sphere, calculate and write its volume. (v = (4 * p * r3
) / 3) (p = 3.14)
*/

import { question } from "readline-sync";

//input
let radiu = question("enter the sphere's radiu to calculate the volume");
const pi = 3.14;

//str to float
radiu = parseFloat(radiu);

//processing
let volume = (4/3) * pi * Math.pow(radiu, 3);
volume = volume.toFixed(2);

console.log(`the sphere's volume is ${volume}`);