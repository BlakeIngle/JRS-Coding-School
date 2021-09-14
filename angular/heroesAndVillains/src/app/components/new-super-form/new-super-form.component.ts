import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuperService } from 'src/app/services/super.service';

@Component({
  selector: 'new-super-form',
  templateUrl: './new-super-form.component.html',
  styleUrls: ['./new-super-form.component.css']
})
export class NewSuperFormComponent implements OnInit {

  @Input() listSelected: number;

  name: string;
  power: string;
  nemesisName: string;

  constructor(private superService: SuperService) { }

  ngOnInit(): void {
  }

  onFormSubmitted(form: NgForm) {

    if (this.listSelected == 0) {
      this.superService.addNewHero(form.value);
    } else {
      this.superService.addNewVillain(form.value);
    }

    this.superService.supersListUpdated$.next();
  }
}
