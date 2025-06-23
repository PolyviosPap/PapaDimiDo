import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { CalendarStateService } from '../calendar-state.service';


@Component({
  selector: 'app-left-pane',
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './left-pane.component.html',
  styleUrl: './left-pane.component.css'
})
export class LeftPaneComponent {
  selectedDate!: Date;  // ! -> definite assignment assertion for assuring typesript that the variable will get assigned before it's used.

  // calendar-state service injection
  constructor(public calendarState: CalendarStateService) {}

  ngOnInit(): void {
    // get the selected week from the calendar-state service
    this.selectedDate = this.calendarState.getSelectedDate();
    
    // subscribe to the observable
    this.calendarState.selectedDate$.subscribe(date => {
      this.selectedDate = date;
    });
  }
}
