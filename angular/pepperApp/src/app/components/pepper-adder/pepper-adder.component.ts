import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pepper } from '../../models/pepper.model';
import { PepperService } from '../../services/pepper.service';

@Component({
  selector: 'pepper-adder',
  templateUrl: './pepper-adder.component.html',
  styleUrls: ['./pepper-adder.component.css']
})
export class PepperAdderComponent implements OnInit {

  
  pepper: Pepper = {
    name: '',
    color: '',
    shu: {
      min: 0,
      max: 0
    }
  };

  submitted: boolean;

  readonly colors = [ 'red', 'orange', 'yellow', 'green', 'brown' ]
  
  constructor(private pepperService: PepperService) { }

  ngOnInit(): void {
    this.newPepper();
  }


  newPepper() {
    this.submitted = false;
    this.pepper = {
      name: '',
      color: '',
      shu: {
        min: 0,
        max: 0
      }
    }
  }

  savePepper() {

    // end goal -> post pepper to database

      // format the data
      if(this.pepper.name == "" || this.pepper.color == "") {
        // invalid
        console.log("Pepper must have a name and color");
        return;
      }
      this.pepper.color = this.pepper.color.toLowerCase();
      if(this.pepper.shu.min > this.pepper.shu.max) {
        console.log("Peppers' skoville min cannot be greater than the max")
        return;
      }

      const data = {
        name: this.pepper.name,
        color: this.pepper.color,
        shu: {
          min: this.pepper.shu.min,
          max: this.pepper.shu.max
        }
      }

    this.pepperService.postPepper(data)
      .subscribe(response => {
        console.log("pepper created: " , response);
        this.submitted = true;
        // emit to all other compoennts that this happened

        this.pepperService.pepperPosted$.next();

      }, error => {
        console.error("ERROR creating pepper")
        console.log(error);
      })
  }
}
