import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styles: [
    `
      input {
        border: 1px solid orangered;
        border-radius: 3px;
        display: inline-block;
        padding: 0.8rem;
        font-size: 1.5rem;
        color: darkgreen;
      }
    `,
    `
      input::placeholder {
        color: orangered;
        /* font-family: 'Rubik Broken Fax', system-ui; */
      }
    `,
  ],
})
export class AppComponent {
  title = 'gemmy';
  name = '';
}
