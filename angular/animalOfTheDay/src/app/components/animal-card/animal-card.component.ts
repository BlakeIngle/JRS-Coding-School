import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Animal } from 'src/app/models/animal.model';
import { SelectedAnimalService } from 'src/app/services/selected-animal.service';

@Component({
  selector: 'animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  animal: Animal;

  animalSelectedSubscription: Subscription;

  constructor(
    private selectedAnimalService: SelectedAnimalService
  ) {

    this.animalSelectedSubscription = this.selectedAnimalService
    .newAnimalSelected$.subscribe(animal => {
      this.animal = animal
    })
   }

  ngOnInit(): void {
  }

}
