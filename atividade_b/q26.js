import { question } from "readline-sync"

//26. Read a whole number of days, calculate and write how many weeks and how many days it corresponds to.

let days = question("enter a nunber of days to se how many weeks and days it correspond:");

if(days >= 7) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    console.log(`${weeks} weeks and ${remainingDays} days.`);
} else {
    console.log(`${days} days is lass than a week.`);
}
