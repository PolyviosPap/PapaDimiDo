import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-days-headers',
  imports: [CommonModule],
  templateUrl: './days-headers.component.html',
  styleUrl: './days-headers.component.css'
})
export class DaysHeadersComponent {
  weekDays = ['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο', 'Κυριακή'];
  weekDates: Date[] = [];

  ngOnInit() {
    this.setWeek(new Date());
  }

  setWeek(startDate: Date) {
    const startOfWeek = new Date(startDate);
    const currentDay = startDate.getDay();
    const diffToMonday = (currentDay === 0 ? -6 : 1 - currentDay);
    startOfWeek.setDate(startDate.getDate() + diffToMonday);

    this.weekDates = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }
}