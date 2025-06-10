import { Component } from '@angular/core';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { MainViewComponent } from './main-view/main-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LeftPaneComponent, 
    MainViewComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PapaDimiDo';
}
