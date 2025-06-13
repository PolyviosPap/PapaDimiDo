import { Component } from '@angular/core';
import { WeekBarComponent } from './week-bar/week-bar.component';
import { DaysComponent } from './days/days.component';

@Component({
  selector: 'app-main-view',
  imports: [
    WeekBarComponent,
    DaysComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

}
