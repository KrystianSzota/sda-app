import { Component, Input } from '@angular/core';
import { User } from 'src/models/stoper';
import { StoperService } from '../stoper.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  usersInList: User[] = [];

  constructor(private stoperService: StoperService) {
    this.usersInList = this.stoperService.getUsers();
  }
}
