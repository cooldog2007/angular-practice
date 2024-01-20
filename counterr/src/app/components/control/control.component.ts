import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  @Output('count') countEvent = new EventEmitter<number>();
  @Output('countStop') countStopEvent = new EventEmitter();

  intervalOn: boolean = false;
  interval: NodeJS.Timeout | null = null;
  currentNumber: number = 0;

  countStart() {
    if (this.intervalOn) {
      return;
    }
    this.interval = setInterval(() => {
      this.currentNumber += 1;
      this.countEvent.emit(this.currentNumber);
    }, 1000);
    this.intervalOn = true;
  }

  countStop() {
    if (!this.interval) return;
    clearInterval(this.interval);
    this.interval = null;
    this.intervalOn = false;
    this.currentNumber = 0;
    this.countStopEvent.emit();
  }

  constructor() {}
}
