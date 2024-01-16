import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: 'online' | 'offline' = 'online';

  getServerStatus(): typeof this.serverStatus {
    if (Math.random() > 0.5) {
      this.serverStatus = 'offline';
      return 'offline';
    }
    this.serverStatus = 'online';
    return 'online';
  }

  getColor() {
    return this.serverStatus === 'online' ? '#00ff40' : 'red';
  }

  constructor() {
    this.getServerStatus();
  }
}
