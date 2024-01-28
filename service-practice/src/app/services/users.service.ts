import { EventEmitter, Injectable } from '@angular/core';
import { UserCounterService } from './user-counter.service';

@Injectable()
export class UsersService {
  constructor(private userCounterService: UserCounterService) {}

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userCounterService.counter('toInactive');
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userCounterService.counter('toActive');
  }

  userSetToActive = new EventEmitter<number>();
  userSetToInactive = new EventEmitter<number>();
}
