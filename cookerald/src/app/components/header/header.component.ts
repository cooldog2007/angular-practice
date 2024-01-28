import { Component, EventEmitter, Output } from '@angular/core';
import { View } from './view.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentView: View = 'recipes';
  @Output() viewChange = new EventEmitter<typeof this.currentView>();

  setView(view: typeof this.currentView) {
    this.currentView = view;
    console.log(this.currentView);
    this.viewChange.emit(this.currentView);
  }
}
