import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CalendarStateService} from '../../../calendar-state.service';

@Component({
  selector: 'app-days-headers',
  imports: [CommonModule],
  templateUrl: './days-headers.component.html',
  styleUrl: './days-headers.component.css'
})
export class DaysHeadersComponent {
  weekDays = ['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο', 'Κυριακή'];
  weekDates: Date[] = [];
  selectedDate!: Date;  // ! -> definite assignment assertion for assuring typesript that the variable will get assigned before it's used.

  // calendar-state service injection
  constructor(private calendarState: CalendarStateService) {}

  ngOnInit() {
    // get the selected date from the calendar-state service
    this.selectedDate = this.calendarState.getSelectedDate();
    // set the week 
    this.setWeek(this.selectedDate);
    // subscribe to the selectedDate 
    this.calendarState.selectedDate$.subscribe(date => {
      this.selectedDate = date;
    });    
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

  selectDay(date: Date): void {
    this.selectedDate = date;
    this.calendarState.setSelectedDate(date);
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isSelected(date: Date): boolean {
    return date.toDateString() === this.selectedDate.toDateString();
  }
}