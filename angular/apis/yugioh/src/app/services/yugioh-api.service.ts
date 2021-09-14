import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YugiohCard } from '../models/YugiohCard.model';
import { Observable } from 'rxjs';

const BASE_URL = "https://db.ygoprodeck.com/api/v7"
@Injectable({
  providedIn: 'root'
})
export class YugiohAPIService {

  constructor(private http: HttpClient) { }

  getRandomCard(): Observable<any> {
    return this.http.get(`${BASE_URL}/randomcard.php`)
  }
}
