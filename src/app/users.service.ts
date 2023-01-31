import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse, UsersResponse } from 'src/models/stoper';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUserById(userId: number): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(
      `https://reqres.in/api/users/${userId}`
    );
  }

  getUsers(): Observable<UsersResponse> {
    return this.httpClient.get<UsersResponse>('https://reqres.in/api/users');
  }
}
