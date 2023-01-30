import { Component, Input } from '@angular/core';
import { Round } from 'src/models/stoper';

@Component({
  selector: 'app-rounds-list',
  templateUrl: './rounds-list.component.html',
  styleUrls: ['./rounds-list.component.css']
})
export class RoundsListComponent {
 @Input() roundsInList: Round[] = [];
}
