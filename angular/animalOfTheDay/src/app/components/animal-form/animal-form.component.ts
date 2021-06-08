import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Animal } from 'src/app/models/animal.model';
import { AnimalAPIService } from 'src/app/services/animal.service';
import { SelectedAnimalService } from 'src/app/services/selected-animal.service';

@Component({
  selector: 'animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  @Input() animal: Animal;

  newAnimal: boolean = false;
  originalName: string = "";
  showForm: boolean = false;

  classes: any[] = [];
  diets: any[] = [];

  animalSelectedSubscription: Subscription;

  constructor(
    private selectedAnimalService: SelectedAnimalService,
    private animalAPIService: AnimalAPIService
  ) {

    this.animalSelectedSubscription = this.selectedAnimalService
    .newAnimalSelected$.subscribe(animal => {
      this.animal = new Animal(animal);
      this.showForm = false;
      this.newAnimal = false;
      this.originalName = animal.name;
    })
   }

  ngOnInit(): void {
    for (let i in Animal.CLASSES) {
      this.classes.push(Animal.CLASSES[i])
    }
    for (let i in Animal.DIETS) {
      this.diets.push(Animal.DIETS[i])
    }

  }

  reset() {
    this.showForm = false;
    this.newAnimal = true;
    this.animal = null;
    this.originalName = "";
  }

  onCreateNewClicked() {
    this.animal = new Animal({
      className: "",
      diet: ""
    })
    this.newAnimal = true;
    this.showForm = true;
  }

  onEditClicked() {
    this.newAnimal = false;
    this.showForm = true;
  }

  onSubmitNewClicked() {
    alert("submitting animal")
    // service call
    this.animalAPIService.createAnimal(this.animal)
      .subscribe(data => {
        console.log("Successfully created " + this.animal.name, data)
        this.selectedAnimalService.refreshList$.next();
        this.reset();
      }, 
      error => {
        console.error("ERROR creating " + this.animal.name, error)
        alert("ERROR creating new animal.");
      });
  }

  onUpdateClicked() {
    // service call
    this.animalAPIService.updateAnimalById(this.animal._id, this.animal)
    .subscribe(data => {
      console.log("Successfully updated " + this.animal.name, data)
      this.selectedAnimalService.refreshList$.next()
      this.reset();
    }, 
    error => {
      console.error("ERROR updating " + this.originalName, error)
      alert("ERROR updating animal.");
    });
  }

  onDeleteClicked() {
    if(window.confirm("Are you sure you want to delete '" + this.originalName + "' ?")) {
      this.animalAPIService.deleteAnimalById(this.animal._id)
      .subscribe(data => {

        this.selectedAnimalService.refreshList$.next()
        this.reset();
      },
      error => {
        alert("ERROR deleting animal: " + this.originalName)
        console.error("ERROR deleting animal: ", error)
      })
    }
  }
}
