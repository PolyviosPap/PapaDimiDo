export function getMondayOfDatesWeek(date: Date): Date {
    const day = date.getDay(); // 0 (Sun) - 6 (Sat)
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(date);
    monday.setDate(date.getDate() + diff);
    return monday;
}

export function getDatesWeek(date: Date): Date[] {
    const monday = getMondayOfDatesWeek(new Date(date));
    const weekDates: Date[] = [];

    for (let i = 0; i < 7; i++) {
        const day = new Date(monday);
        day.setDate(monday.getDate() + i);
        weekDates.push(day);
    }

    return weekDates;
}

export function getWeeksLabel(week: Date[]): string {
    let res: string = "";

    if (week[0].getFullYear() !== week[6].getFullYear()) {
        res = week[0].getDate().toString();
        res += " "
        res += Intl.DateTimeFormat('el-GR', { month: 'short' }).format(week[0]);
        res += " '";
        res += Intl.DateTimeFormat('el-GR', { year: '2-digit' }).format(week[0]);
        res += " - ";
        res += week[6].getDate().toString();
        res += " "
        res += Intl.DateTimeFormat('el-GR', { month: 'short' }).format(week[6]);
        res += " '";
        res += Intl.DateTimeFormat('el-GR', { year: '2-digit' }).format(week[6]);
    }
    else if (week[0].getMonth() !== week[6].getMonth()) {
        res = week[0].getDate().toString();
        res += " "
        res += Intl.DateTimeFormat('el-GR', { month: 'short' }).format(week[0]);
        res += " - ";
        res += week[6].getDate().toString();
        res += " "
        res += Intl.DateTimeFormat('el-GR', { month: 'short' }).format(week[6]);
        res += " '";
        res += Intl.DateTimeFormat('el-GR', { year: '2-digit' }).format(week[6]);
    }
    else {
        res = week[0].getDate().toString();
        res += " - "
        res += week[6].getDate().toString();
        res += " ";
        res += Intl.DateTimeFormat('el-GR', { month: 'short' }).format(week[0]);
        res += " '";
        res += Intl.DateTimeFormat('el-GR', { year: '2-digit' }).format(week[0]);
    }
    
    return res;
}