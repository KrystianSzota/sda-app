import { Component } from '@angular/core';
import { Round, User } from 'src/models/stoper';
import { StoperService } from './stoper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  seconds = 0;
  decySeconds = 0;
  isActive = false;

  users: User[] = [];

  userName: string = '';
  private intervalId: any = undefined;

  constructor(private stoperService: StoperService) {
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
    this.users = [];
    this.userName = '';

    this.stoperService.resetRounds();
  }

  addRound(): void {
    this.stoperService.addRound(this.seconds, this.decySeconds);
  }

  addUser(): void {
    this.users.push({
      userName: this.userName,
      decySeconds: this.decySeconds,
      seconds: this.seconds,
    });
    this.userName = '';
  }
}
