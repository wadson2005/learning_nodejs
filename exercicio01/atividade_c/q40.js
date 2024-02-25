/*40. Calculate the amount of money spent by a smoker. Input data: the number of years it
smoked, the number of cigarettes smoked per day and the price of a pack (1 pack contains 20 cigarettes).
*/

import { question } from "readline-sync";

const years = parseInt(question("enter how many years it smoked: "));
const cigarettesDays = parseInt(question("enter how many cigarettes it smoked per day: "));
const pricePack = parseFloat(question("enter the price of a pack: "));

//processing
const days = years * 365;
const totalCigarettes = cigarettesDays * days;
const packsSmoked = totalCigarettes / 20;
const totalAmoutSpent = packsSmoked * pricePack;

//displaying
console.log(`The total amout spent by the smoker is: $${totalAmoutSpent.toFixed(2)}`);
