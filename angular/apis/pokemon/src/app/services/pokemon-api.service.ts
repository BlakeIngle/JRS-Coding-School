import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://pokeapi.co/api/v2"

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  constructor(private http: HttpClient) { }

  getType(type: string) {
    return this.http.get(`${BASE_URL}/type/${type}`);
  }

  getPokemon(nameOrId: string) {
    return this.http.get(BASE_URL + "/pokemon/" + nameOrId);
  }
}
