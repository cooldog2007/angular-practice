import { Component } from '@angular/core';
import { View } from './components/header/view.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentView: View = 'recipes';

  onViewChange(e: View) {
    this.currentView = e;
  }
}
