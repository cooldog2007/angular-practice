import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: './success-alert.component.html',
  styles: [
    `
      h2 {
        display: inline-block;
        margin: 0 auto;
        border: 4px dotted darkgreen;
        border-radius: 5px;
        padding: 1rem 3rem;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
