/*
A store sells its products with a down payment plus two installments, where the down payment is greater than or equal to each of the two installments; these installments must be equal, whole, and as large as possible. For example, if the merchandise value is R$ 270.00, the down payment and the two installments are each R$ 90.00; if the merchandise value is R$ 302.00, the down payment is R$ 102.00, and the two installments are each R$ 100.00. Write an algorithm that receives the merchandise value and provides the down payment and the two installments according to the rules mentioned above.
*/

import { question } from "readline-sync";

const commodity = parseFloat(question("enter the price of the commodity: "));

//calculating
const installments = Math.floor(commodity / 3);
const downPayment = installments + commodity % 3;

console.log(`the down payment'll be $${downPayment.toFixed(2)} plus 2 x $${installments.toFixed(2)} installments. `);
