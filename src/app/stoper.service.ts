import { Injectable } from '@angular/core';
import { Round } from 'src/models/stoper';

@Injectable({
  providedIn: 'root',
})
export class StoperService {
  private rounds: Round[] = [];

  constructor() {}

  resetRounds(): void {
    this.rounds = [];
  }

  getRounds(): Round[] {
    return this.rounds;
  }

  addRound(seconds: number, decySeconds: number): void {
    this.rounds.push({
      decySeconds: decySeconds,
      seconds: seconds,
    });
  }
}
