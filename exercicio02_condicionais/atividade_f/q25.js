import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg))
}

function correctPassword(p) {
const correct = 1234;
if(p !== correct) {
return "incorrect password. Please try again. ";
} else {
    return "well come!"
}
}

function main() {
    const password = getNumber("enter the password: ");
    const result = correctPassword(password)
    console.log(result)
}
main();