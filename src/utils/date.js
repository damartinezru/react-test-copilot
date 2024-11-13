export const compareDate = (date1, date2) => {
    if (!date1 || !date2) return false;
    return date1.getTime() < date2.getTime();
}