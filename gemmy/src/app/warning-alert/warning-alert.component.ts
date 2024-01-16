import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      h2 {
        display: inline-block;
        margin: 0 auto;
        border: 4px dotted darkred;
        color: red;
        border-radius: 5px;
        padding: 1rem 3rem;
      }
    `,
  ],
})
export class WarningAlertComponent {}
