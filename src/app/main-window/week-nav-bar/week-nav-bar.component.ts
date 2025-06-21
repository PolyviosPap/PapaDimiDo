import { Component, OnInit } from '@angular/core';

import { CalendarStateService } from '../../calendar-state.service';
import { getWeeksLabel } from '../../shared/helpers'

@Component({
  selector: 'app-week-nav-bar',
  imports: [],
  templateUrl: './week-nav-bar.component.html',
  styleUrl: './week-nav-bar.component.css'
})
export class WeekNavBarComponent implements OnInit {
  selectedWeekLabel: string = "";

  constructor(private calendarState: CalendarStateService) {}

  ngOnInit(): void {
    this.calendarState.selectedWeek$.subscribe( week => {
      this.selectedWeekLabel = getWeeksLabel(week);
    });
  }

  onArrowLeftClick(): void {
    let prevWeekMonday = new Date(this.calendarState.getSelectedWeek()[0]);
    prevWeekMonday.setDate(prevWeekMonday.getDate() - 7);
    
    this.calendarState.setSelectedWeek(prevWeekMonday);
  }

  onArrowRightClick(): void {
    let nextWeekMonday = new Date(this.calendarState.getSelectedWeek()[0]);
    nextWeekMonday.setDate(nextWeekMonday.getDate() + 7);
    
    this.calendarState.setSelectedWeek(nextWeekMonday);
  }
}
