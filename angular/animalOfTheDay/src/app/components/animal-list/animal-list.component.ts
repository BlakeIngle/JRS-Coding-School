import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Animal } from 'src/app/models/animal.model';
import { AnimalAPIService } from 'src/app/services/animal.service';
import { SelectedAnimalService } from 'src/app/services/selected-animal.service';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Animal[];

  animalSelectedIndex: number;

  refreshSubscription: Subscription;

  constructor(
    private animalService: AnimalAPIService,
    private animalSelectedService: SelectedAnimalService) { 

      this.refreshSubscription = this.animalSelectedService.refreshList$
      .subscribe(() => {
        
        this.refreshList();
      });
    }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.animalService.getAllAnimals()
      .subscribe(data => {
        this.animals = data;
      }, 
      error => {
        console.error("ERROR: ", error)
      });
  }

  onClick(index: number) {
    this.animalSelectedIndex = index;
    this.animalSelectedService.newAnimalSelected$.next(this.animals[index])
  }
}
