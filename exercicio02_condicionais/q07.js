//Read 3 (three) numbers (each number corresponds to a side of the triangle), check, and write if the 3 (three) numbers form a triangle (the sum of two sides cannot be less than the third side). If they do, check if they form an equilateral triangle (3 equal sides), isosceles triangle (2 equal sides), or scalene triangle (3 different sides). There is no side with a length of 0 (zero).
import { question } from "readline-sync";

function istriangle(n1, n2, n3) {
    if(n1 > 0 && n2 > 0 && n3 > 0) {
    if (n1 + n2 >= n3 || n1 + n3 >= n2 || n2 + n3 >= n1) {
if (n1 === n2 && n1 === n3 && n2 === n3) {
return "Equilateral triangle";
} else {
    if (n1 === n2 != n3 || n1 === n3 != n2 || n2 === n3 != n1) {
        return "Isosceles triangle"
    } else {
        return "escalene triangle";
    }
} 
} else{
        return "it is not a triangle";
    }
} else{return "the sides cannot be equal 0";}
}

function getNumber(msg) {
    return Number(question(msg));
}

function main() {
const s1 = getNumber("Please enter the first measurement for one of the sides of the triangle.: ");
const s2 = getNumber("now, the second mesurement: ");
const s3 = getNumber("finaly, enter the last mesurement: ");

const result = istriangle(s1, s2, s3);

//displaying
console.log(`${result}`);
}
main();