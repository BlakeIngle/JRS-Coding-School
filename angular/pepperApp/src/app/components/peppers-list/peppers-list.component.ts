import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pepper } from 'src/app/models/pepper.model';
import { PepperService } from 'src/app/services/pepper.service';

@Component({
  selector: 'peppers-list',
  templateUrl: './peppers-list.component.html',
  styleUrls: ['./peppers-list.component.css']
})
export class PeppersListComponent implements OnInit {

  @Output() selectPepper = new EventEmitter<Pepper>()

  newPepperSubscription: Subscription;

  // mySubscription: Subscription;
  // constructor(private theService: TheService){
  //    this.mySubscription = this.theService.theSubject$.subscribe(data => {
  //        // code to execute when the event occurs
  //        // occurs on .next(data)
  //  })
  // }

  peppers?: Pepper[];
  currentPepper?: Pepper;
  currentIndex = -1;
  name: '';

  constructor(private pepperService: PepperService) { 

    this.newPepperSubscription = this.pepperService
    .pepperPosted$.subscribe(res => {
      this.refreshList();
    })
    
  }

  ngOnInit(): void {
    let currentPepper;
    currentPepper = 4;
    this.pepperService.getPeppers()
    .subscribe((data) => {
      // do something with the data
      this.peppers = data;
    }, (error) => {
      // do something when there is an error
    }, () => {
      // do something when we finish
    })
    this.peppers
  }

  ngOnDestroy() {
    this.newPepperSubscription.unsubscribe();
  }

  retrievePeppers() {
    this.pepperService.getAll()
      .subscribe(data => {
        this.peppers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      })

    console.log("retrieve finised")
  }

  refreshList() {
    console.log("refreshing list")
    this.retrievePeppers();
    this.currentPepper = undefined;
    this.currentIndex = -1;
  }

  setActivePepper(pepper: Pepper, index: number) {
    this.currentPepper = pepper;
    this.currentIndex = index;
  }

  removeAllPeppers() {
    this.pepperService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
      }, error => {
        console.log(error)
      }
    )
  }

  searchName() {
    this.pepperService.findByName(this.name)
      .subscribe(data => {
        this.peppers = data;
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deletePepper(pepper: Pepper) {
    // remove from database
    this.pepperService.delete(pepper)
      .subscribe((data) => {
        alert("Pepper removed")
      }, (error) => {
        alert("ERROR: Pepper was not removed")
      })

  }

  onPepperClick(pepper: Pepper) {
    // output to app compoennt the pepper
    this.selectPepper.emit(pepper);
  }
}
