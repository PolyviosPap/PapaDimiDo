import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarStateService } from '../../../calendar-state.service';

@Component({
  selector: 'app-days-headers',
  imports: [CommonModule],
  templateUrl: './days-headers.component.html',
  styleUrl: './days-headers.component.css'
})
export class DaysHeadersComponent {
  weekDays = ['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο', 'Κυριακή'];
  weekDates: Date[] = [];

  // calendar-state service injection
  constructor(private calendarState: CalendarStateService) {}

  ngOnInit(): void {
    // get the selected week from the calendar-state service
    this.weekDates = this.calendarState.getSelectedWeek();
    
    // subscribe to the observable
    this.calendarState.selectedWeek$.subscribe(week => {
      this.weekDates = week;
    })
  }

  selectDay(date: Date): void {
    this.calendarState.setSelectedDate(date);
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isSelected(date: Date): boolean {
    return date.toDateString() === this.calendarState.getSelectedDate().toDateString();
  }
}