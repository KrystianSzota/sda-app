import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  seconds = 0;
  decySeconds = 0;

  constructor() {
    setInterval(() => {
      this.decySeconds++;
      if(this.decySeconds === 10){
        this.seconds++;
        this.decySeconds = 0;
      }
    }, 100);
  }
}
