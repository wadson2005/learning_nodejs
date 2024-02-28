/*
16. Read two grades from a student and write the word “Approved” on the screen if the average of the two grades is higher
or equal to 7.0. If the average is less than 7.0, the program must read the exam score and calculate the average
Final. If this average is greater than or equal to 5.0, the program must write “Approved”, otherwise it must
write “Fail”.
*/

import { question } from "readline-sync";

function getNumber(msg) {
    return parseFloat(question(msg));
}

function calculateAverage (a, b) {
    const average = (a + b) / 2;
    let result = "approved";
if(average < 7.0) {
    const examScore = getNumber("enter the score of the end exam: ");
    const gradeEnd = (average + examScore) / 2;
    if (gradeEnd < 5.0) {
        result = "Fail"
    }
}
return result;
}

function main() {
    const grade1 = getNumber("enter the first grade to calculate the average: ");
    const grade2 = getNumber("Enter the second grade: ");

console.log(calculateAverage(grade1, grade2));
}
main();