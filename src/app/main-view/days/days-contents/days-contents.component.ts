import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-days-contents',
  imports: [CommonModule],
  templateUrl: './days-contents.component.html',
  styleUrl: './days-contents.component.css'
})
export class DaysContentsComponent {
  weekDays = ['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο', 'Κυριακή'];
  hours: string[] = [];

  constructor() {
    this.generateHours();
  }

  generateHours() {
    for (let i = 9; i < 22; i++) {
      this.hours.push(i.toString().padStart(2, '0'));
    }
  }
}