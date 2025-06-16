import { Component } from '@angular/core';
import { WeekNavBarComponent } from './week-nav-bar/week-nav-bar.component';
import { DaysWindowComponent } from './days-window/days-window.component';

@Component({
  selector: 'app-main-window',
  imports: [
    WeekNavBarComponent,
    DaysWindowComponent
  ],
  templateUrl: './main-window.component.html',
  styleUrl: './main-window.component.css'
})
export class MainWindowComponent {

}
