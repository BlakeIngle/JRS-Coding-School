import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie(searchQuery: string): Observable<any> {
    return this.http.get("https://imdb-api.com/en/API/Search/k_veco7d16/" + searchQuery);
  }

  getSeries(searchQuery: string): Observable<any> {
    return this.http.get("https://imdb-api.com/en/API/SearchSeries/k_veco7d16/" + searchQuery);
  }

  getCompany(searchQuery: string): Observable<any> {
    return this.http.get("https://imdb-api.com/en/API/SearchCompany/k_veco7d16/" + searchQuery);
  }
}
