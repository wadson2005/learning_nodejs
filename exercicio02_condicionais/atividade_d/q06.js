import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function istriangle(x, y, z) {
    if (x + y + z === 180 && x > 0 && y > 0 && z > 0) {
        if (x < 90 && y < 90 && z < 90) {
            return "acute triangle";
        } else if (x === 90 || y === 90 || z === 90) {
            return "right triangle";
        } else {
            return "obtuse triangle";
        }
    } else {
        return "it is not a valid triangle.";
    }
}

function main() {
    const a1 = getNumber("Enter the first value of the angle of the triangle: ");
    const a2 = getNumber("Enter the second value of the triangle's angle: ");
    const a3 = getNumber("Enter the third value of the triangle's angle: ");

    const result = istriangle(a1, a2, a3);

    console.log(`${result}.`);
}

main();
