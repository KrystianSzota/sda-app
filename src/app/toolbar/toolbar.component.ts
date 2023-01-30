import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() isActive: boolean = false;

  @Output() onStartClicked: EventEmitter<any> = new EventEmitter();

  startStoper(): void {
    this.onStartClicked.emit();
  }

  resetStoper(): void {}
  stopStoper(): void {}
  addRound(): void {}
}
