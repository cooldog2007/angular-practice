import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  even: number[] = [];
  odd: number[] = [];

  numClear() {
    this.even = [];
    this.odd = [];
  }

  onCount(n: number) {
    console.log(n);
    if (n % 2 === 0) {
      this.even.push(n);
    } else {
      this.odd.push(n);
    }

    console.log(this.even, this.odd);
  }
}
