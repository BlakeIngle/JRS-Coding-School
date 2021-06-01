import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pepper } from '../models/pepper.model';

const baseUrl = 'http://localhost:8081'

@Injectable({
  providedIn: 'root'
})
export class PepperService {

  pepperPosted$ = new Subject<void>()

  constructor(private http: HttpClient) { }

  getPeppers(): Observable<any> {
    return this.http.get(`${baseUrl}/peppers`)
    // http://localhost:8081/peppers
  }

  create(pepper: Pepper): Observable<any> {

    // post -> http://localhost:8081/pepper/ , data
    // `${baseUrl}/pepper/`
    // this.http.post(`${baseUrl}/pepper/`, pepper);

    return this.http.post(`${baseUrl}/pepper`, pepper)
  }

  getAll(): Observable<Pepper[]> {
    return this.http.get<Pepper[]>(baseUrl)
  }

  // get(name: string): Observable<Pepper> {
  //   return this.http.get(`${baseUrl}/${name}`);
  // }
  get(name: string): Observable<any> {
    return this.http.get(`${baseUrl}/${name}`);
  }

  postPepper(pepper: any):Observable<any> {
    return this.http.post(`${baseUrl}/pepper`, pepper);
  }

  update(id: any, data: any): Observable<any> {
    console.log("updating pepper with id: " + id);

    `${baseUrl}/pepper/${id}`
    
    return this.http.put(`${baseUrl}/pepper/${id}`, data);
  }

  delete(pepper: Pepper): Observable<any> {
    // send a delete request to server
    this.pepperPosted$.next()
    return this.http.delete(`${baseUrl}/pepper/${pepper.name}`)
  }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Pepper[]> {
    return this.http.get<Pepper[]>(`${baseUrl}?name=${name}`)
  }
}
