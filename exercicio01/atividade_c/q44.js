import { question } from "readline-sync";

/*
44. Knowing that brass is made up of 70% copper and 30% zinc, write an algorithm that calculates the
quantity of each of these components to obtain a certain quantity of brass (in kg), informed
by the user.
*/
const quantity = parseFloat(question("what the quantity of brass do you want?"));

//calculating
const copper = 0.70 * quantity;
const zinc = 0.30 * quantity;

//displaying
console.log(`you need ${copper} kg of copper and ${zinc} kg of zinc to get this quantity of brass. `);
