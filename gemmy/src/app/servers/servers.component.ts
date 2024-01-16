import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  // templateUrl: './servers.component.html',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = true;
  serverName = '';
  showServerCreationMessage = false;
  servers = ['test server', 'testerald'];
  timestamps: { msg: string; id: number }[] = [];
  showDetails = false;
  logNumber = 0;

  onCreateServer() {
    console.log(this.serverName);
    this.servers.push(this.serverName);

    this.showServerCreationMessage = true;
    setTimeout(() => {
      this.showServerCreationMessage = false;
    }, 3000);
  }

  updateServerName(e: any) {
    const v = e.target.value;
    if (typeof v == 'string') {
      this.serverName = v;
    }
  }

  onToggleDetails(e: any) {
    this.logNumber += 1;
    this.showDetails = !this.showDetails;
    const msg = `${(e.timeStamp / 1000)
      .toFixed(2)
      .toString()}s since page loaded`;
    const id = this.logNumber;
    this.timestamps.push({ msg, id });
    console.log(this.timestamps);
  }

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 1000);
  }
}
