import { Component } from '@angular/core';
import { WeekBarComponent } from './week-bar/week-bar.component';
import { DaysViewComponent } from './days-view/days-view.component';

@Component({
  selector: 'app-main-view',
  imports: [
    WeekBarComponent,
    DaysViewComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

}
