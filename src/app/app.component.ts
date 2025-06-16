import { Component } from '@angular/core';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { MainWindowComponent } from './main-window/main-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LeftPaneComponent, 
    MainWindowComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PapaDimiDo';
}
