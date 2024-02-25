/*
45. An algorithm to manage withdrawals from an ATM must have some mechanism to
decide the number of notes of each value that should be made available to the customer who carried out the
withdraw. A possible criterion would be "optimal distribution" in the sense that the lowest value notes
available were distributed to the minimum possible number. For example, if the machine only has
notes of R$50, R$10, R$5 and R$1, for a requested amount of R$87, the algorithm should
indicate one R$50 note, three R$10 notes, one R$5 note and two R$1 notes. Write a
algorithm that receives the value of the requested amount and returns the distribution of notes according to the
optimal distribution criterion.
*/

import { question } from "readline-sync";

const total = parseFloat(question("enter the value to se the distribution of notes: "));

//processing
const notes100 = Math.floor(total / 100);
const notes50 = Math.floor((total % 100) / 50);
const notes20 = Math.floor(((total % 100) % 50) / 20);
const notes10 = Math.floor((((total % 100) % 50) % 20) / 10);
const notes5 = Math.floor(((((total % 100) % 50) % 20) % 10) / 5);
const notes1 = Math.floor((((((total % 100) % 50) % 20) % 10) % 5) / 1);

//displaying
console.log(`the distribution of notes is:
- R$100 notes: ${notes100};
- R$50 notes: ${notes50};
- R$20 notes: ${notes20};
- R$10 notes: ${notes10};
- R$5 notes: ${notes5};
- R$1 notes: ${notes1}. `);
