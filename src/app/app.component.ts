import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  licznik = 0;

  constructor() {
    setInterval(() => {
      this.licznik++;
      console.log(this.licznik);
    }, 100);
  }
}
