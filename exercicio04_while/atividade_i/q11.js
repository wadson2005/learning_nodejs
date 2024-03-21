/*
11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por 
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)
10Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o 
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total 
de alunos da turma.
*/

import { getNumber } from "./functions.js";

function main() {
    let aprovados = 0;
        let reprovados = 0;
        let total = aprovados + reprovados;
    while(true) {
        const matricula = getNumber("digite a matrícula: ");
        
        if(matricula === 0) {
            break;
        }

        const n1 = getNumber(`Digite a primeira nota do aluno com a matrícula ${matricula}: `);
        const n2 = getNumber(`Digite a segunda nota do aluno com a matrícula ${matricula}: `);
        const n3 = getNumber(`Digite a terceira nota do aluno com a matrícula ${matricula}: `);

        

        const media = (2 * n1) + (3 * n2) + (5 * n3);

        
        if(media >= 7) {
            aprovados ++;
        } else {
            reprovados ++;
        }
        

    }    
        console.log(`quantidade de aprovados: ${aprovados};
        reprovados: ${reprovados};
        total de alunos: ${total}
        `);
}
main();