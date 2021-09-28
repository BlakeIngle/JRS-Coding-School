import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  readonly BASE_URL;

  constructor(private http: HttpClient,
    private apiService: ApiService) {
    this.BASE_URL = apiService.baseUrl;
  }

  postMessage(message: string, userId: number): Observable<any> {
    return this.http.post(`${this.BASE_URL}/messages`,
      { message: message, userId: userId })
  }

  getAllMessages(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/messages`);
  }

  getMessagesById(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/messages/${id}`);
  }

  getMessagesByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${userId}/messages`);
  }

  updateMessage(newMessage): Observable<any> {
    return this.http.put(`${this.BASE_URL}/messages`, newMessage);
  }

  deleteMessageById(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/messages/${id}`);
  }

  deleteMessagesByUserId(userId: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/messages/user/${userId}`);
  }
}
