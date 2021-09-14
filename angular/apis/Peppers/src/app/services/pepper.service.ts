import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class PepperService {

  constructor(private http: HttpClient) { }

  getAllPeppers() {
    return this.http.get(`${BASE_URL}/peppers`);
  }

  getPeppersByColor(color: string) {
    return this.http.get(`${BASE_URL}/peppers/color/${color}`);
  }

  addNewPepper(newPepper) {
    return this.http.post(`${BASE_URL}/pepper`, newPepper);
  }

  updatePepper(pepper) {
    return this.http.put(`${BASE_URL}/pepper/${pepper.id}`, pepper)
  }

  deletePepperById(id: number) {
    return this.http.delete(`${BASE_URL}/pepper/${id}`);
  }
}