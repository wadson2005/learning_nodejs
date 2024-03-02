import { question } from "readline-sync";

function getNumber(msg) {
    return Number(question(msg));
}

function convertToMinutes(hours, minutes) {
    return hours * 60 + minutes;
}

function convertToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return [hours, minutes];
}

function calculateGameDuration(startHour, startMinute, endHour, endMinute) {
    const startTimeInMinutes = convertToMinutes(startHour, startMinute);
    const endTimeInMinutes = convertToMinutes(endHour, endMinute);

    let gameDurationInMinutes;

    if (endTimeInMinutes >= startTimeInMinutes) {
        gameDurationInMinutes = endTimeInMinutes - startTimeInMinutes;
    } else {
        // If the game spans midnight
        gameDurationInMinutes = 24 * 60 - startTimeInMinutes + endTimeInMinutes;
    }

    // Check if the duration is within the valid range (0 to 1440 minutes)
    if (gameDurationInMinutes < 0 || gameDurationInMinutes > 1440) {
        return "O tempo de duração não é válido.";
    }

    return gameDurationInMinutes;
}

function main() {
    const horaInicio = getNumber("Digite a hora de início do jogo: ");
    const minutosInicio = getNumber("Digite os minutos: ");
    const horaTermino = getNumber("Digite a hora de término: ");
    const minutosTermino = getNumber("Digite os minutos: ");

    const duracaoJogo = calculateGameDuration(horaInicio, minutosInicio, horaTermino, minutosTermino);

    // Convert to the format of output
    const [hours, minutes] = convertToHoursAndMinutes(duracaoJogo);
    console.log(`A duração do jogo é igual a ${hours} horas e ${minutes} minutos.`);
}

main();
