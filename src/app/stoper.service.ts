import { Injectable } from '@angular/core';
import { Round, User } from 'src/models/stoper';

@Injectable({
  providedIn: 'root',
})
export class StoperService {
  private rounds: Round[] = [];
  private users: User[] = [];

  constructor() {}

  resetRounds(): void {
    this.rounds.splice(0, this.rounds.length);
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

  getUsers(): User[] {
    return this.users;
  }

  resetUsers(): void {
    this.users.splice(0, this.users.length);
  }

  addUser(userName: string, seconds: number, decySeconds: number) {
    this.users.push({
      decySeconds: decySeconds,
      seconds: seconds,
      userName: userName,
    });
  }
}
