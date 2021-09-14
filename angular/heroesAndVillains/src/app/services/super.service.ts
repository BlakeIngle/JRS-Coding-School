import { Injectable } from '@angular/core';
import { Super } from '../models/super.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const BASE_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  supersListUpdated$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get(`${BASE_URL}/heroes`);
  }

  getVillains() {
    return this.http.get(`${BASE_URL}/villains`);
  }

  getAllSupers() {
    return this.http.get(`${BASE_URL}/supers`);
  }

  getHeroById(id: string) {
    return this.http.get(`${BASE_URL}/hero/${id}`);
  }

  getVillainById(id: string) {
    return this.http.get(`${BASE_URL}/villain/${id}`);
  }

  getSuperById(id: string) {
    return this.http.get(`${BASE_URL}/super/${id}`);
  }

  getHeroesByName(name: string) {
    return this.http.get(`${BASE_URL}/hero/name/${name}`);
  }

  getVillainsByName(name: string) {
    return this.http.get(`${BASE_URL}/villain/name/${name}`);
  }

  getSupersByName(name: string) {
    return this.http.get(`${BASE_URL}/super/name/${name}`);
  }

  getHeroesByPower(power: string) {
    return this.http.get(`${BASE_URL}/hero/power/${power}`);
  }

  getVillainsByPower(power: string) {
    return this.http.get(`${BASE_URL}/villain/power/${power}`);
  }

  getSupersByPower(power: string) {
    return this.http.get(`${BASE_URL}/super/power/${power}`);
  }

  addNewHero(hero: { name: string, power: string, nemesisName: string }) {
    let id = this.findValidId()

    let newSuper: Super = {
      id: id,
      name: hero.name,
      power: hero.power,
      nemesisName: hero.nemesisName
    }

    // this.heroes.push(newSuper)
  }

  addNewVillain(villain: { name: string, power: string, nemesisName: string }) {
    let id = this.findValidId()

    let newSuper: Super = {
      id: id,
      name: villain.name,
      power: villain.power,
      nemesisName: villain.nemesisName
    }

    // this.villains.push(newSuper)
  }

  private findValidId() {
    let id = 1;
    return id;
    // while (true) {
    //   for (let hero of this.heroes) {
    //     if (hero.id == id) {
    //       id++;
    //       continue;
    //     }
    //   }
    //   for (let villain of this.villains) {
    //     if (villain.id == id) {
    //       id++;
    //       continue;
    //     }
    //   }
    //   // id is available
    //   return id;
    // }
  }

  public getSupersByQuery(query: {
    name?: string;
    id?: string;
    power?: string;
    nemesisName?: string;
  }) {

    let params = new HttpParams()
    if (query.id) {
      params = params.set("id", query.id);
    }
    if (query.name) {
      params = params.set("name", query.name);
    }
    if (query.power) {
      params = params.set("power", query.power);
    }
    if (query.nemesisName) {
      params = params.set("id", query.nemesisName);
    }

    return this.http.get(`${BASE_URL}/supers`, { params });
  }
}
