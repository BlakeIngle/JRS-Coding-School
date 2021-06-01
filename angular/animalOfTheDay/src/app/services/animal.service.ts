import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';

const baseUrl = "http://localhost:8080/api"

@Injectable({
  providedIn: 'root'
})
export class AnimalAPIService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param animal 
   * @returns 
   */
  createAnimal(animal: Animal): Observable<any> {
    return this.http.post(`${baseUrl}/animal`, animal)
  }

  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${baseUrl}/animals`);
  }

  updateAnimalById(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/animal/${id}`, data)
  }

  deleteAnimalById(id: string): Observable<any> {
    console.log("sending delete request")
    return this.http.delete(`${baseUrl}/animal/${id}`)
  }
}
