import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from 'src/models/stoper';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUserById(userId: number): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(`https://reqres.in/api/users/${userId}`);
  }
}
