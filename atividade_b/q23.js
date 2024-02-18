//23. Read a value in kg (kilogram), calculate and write the equivalent in g (gram).

import { question } from "readline-sync";

let kg = question("enter a value in kilogram");
kg = parseFloat(kg);

//calculate
const gram = kg * 1000;

console.log(`${kg} kilogram is equal ${gram} gram`);
