import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private usersService: UsersService) {
    this.usersService.userSetToActive.subscribe((id: number) => {
      this.usersService.onSetToActive(id);
    });
    this.usersService.userSetToInactive.subscribe((id: number) => {
      this.usersService.onSetToInactive(id);
    });
  }
}
