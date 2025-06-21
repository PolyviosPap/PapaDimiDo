// selected-date.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getDatesWeek } from '../app/shared/helpers';

@Injectable({ providedIn: 'root' })
export class CalendarStateService {
    // initialize to today's date
    private _selectedDate = new BehaviorSubject<Date>(new Date());
    
    selectedDate$ = this._selectedDate.asObservable();

    setSelectedDate(date: Date) {
        this._selectedDate.next(date);
        this.setSelectedWeek(date);
    }

    getSelectedDate(): Date {
        return this._selectedDate.value;
    }

    // initialize to today's week
    private _selectedWeek = new BehaviorSubject<Date[]>(getDatesWeek(this.getSelectedDate()));

    selectedWeek$ = this._selectedWeek.asObservable();

    setSelectedWeek(date: Date) {
        this._selectedWeek.next(getDatesWeek(date));
    }

    getSelectedWeek(): Date[] {
        return this._selectedWeek.value;
    }
}
