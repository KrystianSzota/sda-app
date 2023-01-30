import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() isActive: boolean = false;

  @Output() onStartClicked: EventEmitter<any> = new EventEmitter();
  @Output() onResetClicked: EventEmitter<any> = new EventEmitter();
  @Output() onStopClicked: EventEmitter<any> = new EventEmitter();
  @Output() onAddRoundClicked: EventEmitter<any> = new EventEmitter();

  startStoper(): void {
    this.onStartClicked.emit();
  }

  resetStoper(): void {
    this.onResetClicked.emit();
  }

  stopStoper(): void {
    this.onStopClicked.emit();
  }

  addRound(): void {
    this.onAddRoundClicked.emit();
  }
}
