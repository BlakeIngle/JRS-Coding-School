import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedAnimalService {

  newAnimalSelected$: Subject<Animal> = new Subject<Animal>();
  refreshList$: Subject<void> = new Subject<void>();

  constructor() { }
}
