/*
41. The consumer cost of a new car is the sum of the factory cost and the percentage of
distributor and taxes (applied to the factory cost). Assuming that the distributor's percentage
is 28% and taxes are 45%, write an algorithm that reads the factory cost of a car and
write the cost to the consumer.
*/

import { question } from "readline-sync";

const factoryCost = parseFloat(question("enter the factory cost to build a car: "));

//calculating
const taxes = factoryCost + factoryCost * 0.45;
const distributorPercentage = taxes * 0.25;

const total = taxes + distributorPercentage;

//displaying
console.log(`the consumer will pay $${total.toFixed(2)} for a new car. `);
