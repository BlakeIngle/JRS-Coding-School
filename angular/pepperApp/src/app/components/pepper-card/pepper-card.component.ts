import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pepper } from 'src/app/models/pepper.model';
import { PepperService } from 'src/app/services/pepper.service';

@Component({
  selector: 'pepper-card',
  templateUrl: './pepper-card.component.html',
  styleUrls: ['./pepper-card.component.css']
})
export class PepperCardComponent implements OnInit {

  @Input() currentPepper: Pepper;

  readonly colors = [ 'red', 'orange', 'yellow', 'green', 'brown' ]

  message = '';

  constructor(
    private pepperService: PepperService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // getPepper(name: string) {
  //   this.pepperService.get(name)
  //     .subscribe(
  //       data => {
  //         this.currentPepper = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     )
  // }

  updatePepper() {
    console.log(this.currentPepper._id, this.currentPepper)
    // this.pepperService.update(this.currentPepper._id, this.currentPepper)
    this.pepperService.update(this.currentPepper._id, this.currentPepper)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      )
  }

}
