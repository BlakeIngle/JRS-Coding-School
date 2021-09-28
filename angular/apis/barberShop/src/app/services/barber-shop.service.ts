import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8080/api"

@Injectable({
  providedIn: 'root'
})
export class BarberShopService {

  constructor(private http: HttpClient) { }

  getAllLocations() {
    return this.http.get(`${BASE_URL}/locations`)
  }

  getBarbersByLocation(id: string) {
    return this.http.get(`${BASE_URL}/locations/${id}/barbers`);
  }

  getBarberById(id) {
    return this.http.get(`${BASE_URL}/barbers/${id}`);
  }

  getServices() {
    return this.http.get(`${BASE_URL}/services`);
  }
}
