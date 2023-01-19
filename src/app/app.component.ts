import { Component } from '@angular/core';
import { Round } from 'src/models/stoper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  seconds = 0;
  decySeconds = 0;
  isActive = false;
  rounds: Round[] = [];
  userName: string = '';
  private intervalId: any = undefined;

  constructor() {
    this.userName = "MojaFajnaWartosc";
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
    this.rounds = [];
  }

  addRound(): void {
    this.rounds.push({
      decySeconds: this.decySeconds,
      seconds: this.seconds,
    });
  }
}
