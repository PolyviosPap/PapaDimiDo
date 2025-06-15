import { Component } from '@angular/core';
import { DaysHeadersComponent } from './days-headers/days-headers.component';
import { DaysContentsComponent } from './days-contents/days-contents.component';

@Component({
  selector: 'app-days',
  imports: [
    DaysHeadersComponent,
    DaysContentsComponent
  ],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css'
})

export class DaysComponent {

}