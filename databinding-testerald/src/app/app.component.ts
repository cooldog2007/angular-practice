import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: Server[] = [
    { type: 'server', name: 'test', content: 'jadijap' },
  ];
  addServer(serverData: Server) {
    this.serverElements.push(serverData);
  }
  onChangeName() {
    this.serverElements[0].name = 'changed';
  }
  destroy1stServer() {
    this.serverElements.shift();
    console.log(this.serverElements);
  }
}
