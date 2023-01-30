import { Component, Input } from '@angular/core';
import { Round } from 'src/models/stoper';
import { StoperService } from '../stoper.service';

@Component({
  selector: 'app-rounds-list',
  templateUrl: './rounds-list.component.html',
  styleUrls: ['./rounds-list.component.css'],
})
export class RoundsListComponent {
  roundsInList: Round[] = [];

  constructor(private stoperService: StoperService) {
    this.roundsInList = stoperService.getRounds();
  }
}
