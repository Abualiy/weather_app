export function isDay() {
    const date = new Date();

    const day = Number(date.getHours()) >= 6 && Number(date.getHours())< 18;
    return day
}