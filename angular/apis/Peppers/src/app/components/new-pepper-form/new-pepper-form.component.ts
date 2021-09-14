import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PepperService } from 'src/app/services/pepper.service';

@Component({
  selector: 'new-pepper-form',
  templateUrl: './new-pepper-form.component.html',
  styleUrls: ['./new-pepper-form.component.css']
})
export class NewPepperFormComponent implements OnInit {

  @Input() newPepper: {
    id?: number,
    name?: string,
    color?: string,
    shuMin?: number,
    shuMax?: number,
  }

  constructor(private pepperService: PepperService) { }

  ngOnInit(): void {
    this.newPepper = {};
  }

  onSubmitPepper(form: NgForm) {
    this.pepperService.addNewPepper(form.value)
      .subscribe(
        data => {
          alert("Pepper created successfully.")
          form.reset();
        }, error => {
          alert("Error. Pepper was not added to database.")
        }
      );
  }

  onUpdatePepper(form: NgForm) {

    this.pepperService.updatePepper(this.newPepper)
      .subscribe(
        data => {
          alert("Pepper updated successfully.")
          form.reset();
        }, error => {
          alert("Error. Pepper was not updated in the database.")
        }
      );
  }
}
