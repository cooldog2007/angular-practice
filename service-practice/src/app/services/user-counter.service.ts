import { Injectable } from '@angular/core';

@Injectable()
export class UserCounterService {
  private toInactive: number = 0;
  private toActive: number = 0;

  counter(whereTo: 'toActive' | 'toInactive') {
    this[whereTo] += 1;
    console.log(this.toActive, this.toInactive);
  }
}
