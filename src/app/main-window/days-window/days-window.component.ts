import { Component } from '@angular/core';
import { DaysHeadersComponent } from './days-headers/days-headers.component';
import { DaysContentsComponent } from './days-contents/days-contents.component';

@Component({
  selector: 'app-days-window',
  imports: [
    DaysHeadersComponent,
    DaysContentsComponent
  ],
  templateUrl: './days-window.component.html',
  styleUrl: './days-window.component.css'
})

export class DaysWindowComponent {

}