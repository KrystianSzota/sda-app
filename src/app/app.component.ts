import { Component, OnInit } from '@angular/core';
import { Round, User, UserResponse } from 'src/models/stoper';
import { StoperService } from './stoper.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  seconds = 0;
  decySeconds = 0;
  isActive = false;
  user: UserResponse | undefined = undefined;

  userName: string = '';
  private intervalId: any = undefined;

  constructor(
    private stoperService: StoperService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getUserById(2).subscribe((user) => {
      this.user = user;
    });
  }

  startStoper(): void {
    this.isActive = true;
    this.intervalId = setInterval(() => {
      this.decySeconds++;
      if (this.decySeconds === 10) {
        this.seconds++;
        this.decySeconds = 0;
      }
    }, 100);
  }

  stopStoper(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.isActive = false;
    }
  }

  resetStoper(): void {
    this.seconds = 0;
    this.decySeconds = 0;
    this.userName = '';

    this.stoperService.resetUsers();
    this.stoperService.resetRounds();
  }

  addRound(): void {
    this.stoperService.addRound(this.seconds, this.decySeconds);
  }

  addUser(): void {
    this.stoperService.addUser(this.userName, this.seconds, this.decySeconds);
    this.userName = '';
  }
}
