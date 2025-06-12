import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-days-view',
  imports: [CommonModule],
  templateUrl: './days-view.component.html',
  styleUrl: './days-view.component.css'
})
export class DaysViewComponent {
  wholeDayHours: string[] = [];
  dayTimeHours: string[] = [];

  constructor() {
    this.generateHours();
  }

  generateHours() {
    for (let i = 0; i < 24; i++) {
      this.wholeDayHours.push(i.toString().padStart(2, '0'));
    }

    for (let i = 8; i < 21; i++) {
      this.dayTimeHours.push(i.toString().padStart(2, '0'));
    }
  }
}
