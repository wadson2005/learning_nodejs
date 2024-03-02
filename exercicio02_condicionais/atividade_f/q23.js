/*
23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente.
*/

import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg))
}

function moreRecent(d1, m1, y1, d2, m2, y2) {
    let  recent = "";
    if(y2 > y1) {
        recent = "second";
    } else if(y1 > y2) {
        recent = "first"
    } else {
        if (m1 > m2) {
            recent = "first";
        } else if(m2 > m1) {
            recent = "second";
        } else {
            if (d1 > d2) {
                recent = "first";
            }else if(d2 > d1) {
                    recent = "second"
                }
            }
        }
        return recent
    }

function main() {
    console.log("first date: ")
    const day1 = getNumber("day: ");
    const month1 = getNumber("month: ");
    const year1 = getNumber("year: ");
    console.log("second date: ");
    const day2 = getNumber("Day: ");
    const month2 = getNumber("month: ");
    const year2 = getNumber("year: ");

    const result = moreRecent(day1, month1, year1, day2, month2, year2);
    console.log(`the date more recent is the ${result}. `);
}
main();