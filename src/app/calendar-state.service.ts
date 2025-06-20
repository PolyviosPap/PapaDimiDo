// selected-date.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalendarStateService {
    private _selectedDate = new BehaviorSubject<Date>(new Date());

    selectedDate$ = this._selectedDate.asObservable();

    setSelectedDate(date: Date) {
        this._selectedDate.next(date);
    }

    getSelectedDate(): Date {
        return this._selectedDate.value;
    }
}
