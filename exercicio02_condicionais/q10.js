//10. Read a date (day, month and year), check and write whether the date is valid or not.
import { question } from "readline-sync";

// function to get a number from user
function getNumber(msg) {
    return Number(question(msg));
}

// Function to verify if it is a sleap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to verify if it is a valid date
function dataIsValid(day, month, year) {
    if (month > 0 && month <= 12) {
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day <= 30) {
            return "This date is valid";
        } else if ((month === 1 || month === 3 || month === 5 || month === 8 || month === 10 || month === 12) && day <= 31) {
            return "This date is valid";
        } else if (month === 2) {
            const isLeap = isLeapYear(year);
            let maxDay = isLeap ? 29 : 28;

            if (day <= maxDay) {
                return "This date is valid";
            } else {
                return "This date is not valid";
            }
        }
    } else {
        return "The entered date is not valid";
    }
}

function main() {
    console.log("Enter a date to verify if it is a valid date:");
    const day = getNumber("Day: ");
    const month = getNumber("Month: ");
    const year = getNumber("Year: ");

    const result = dataIsValid(day, month, year);

    console.log(result);
}

main();
