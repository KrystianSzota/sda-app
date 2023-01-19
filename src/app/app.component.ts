import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  seconds = 0;
  decySeconds = 0;
  isActive = false;
  private intervalId: any = undefined;

  constructor() {}

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
  }
}
