import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly BASE_URL;

  constructor(private http: HttpClient,
    private apiService: ApiService) {
    this.BASE_URL = apiService.baseUrl;
  }

  setActiveUser(user: { id, username, password }) {
    localStorage.setItem("activeUser", JSON.stringify(user));
  }

  getActiveUser() {
    return JSON.parse(localStorage.getItem("activeUser"));
  }

  isValid() {
    return this.getActiveUser() != null;
  }

  logout() {
    localStorage.removeItem("activeUser");
  }

  attemptLogin(username: string, password: string) {
    return this.http.post(`${this.BASE_URL}/users/login`,
      { username: username, password: password });
  }

  postUser(newUser): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users`, newUser)
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users`)
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${id}`);
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/username/${username}`);
  }

  updateUser(updatedUser): Observable<any> {
    return this.http.put(`${this.BASE_URL}/users`, updatedUser)
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/users/${id}`)
  }
}
