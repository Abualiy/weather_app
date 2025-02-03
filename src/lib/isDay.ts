export function isDay() {
    const date = new Date();

    const day = Number(date.toTimeString()) >= 6 && Number(date.toTimeString)< 18;
    return day
}