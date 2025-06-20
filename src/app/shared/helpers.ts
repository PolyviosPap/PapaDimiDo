export function getMondayOfDatesWeek(date: Date): Date {
    // Monday is day 1, Sunday is day 0
    while (date.getDay() !== 1) date.setDate(date.getDate() - 1);
    
    return date;
}

export function getDatesWeek(date: Date): Date[] {
    let weekDates: Date[] = [];

    date = getMondayOfDatesWeek(date);

    for (let i = 0; i < 7; i++) {
        weekDates.push(date);
    }

    return weekDates;
}