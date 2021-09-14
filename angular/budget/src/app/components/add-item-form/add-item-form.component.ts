import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../../../assets/models/budgetItem.model';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {

  @Input() budgetItem: BudgetItem;
  @Input() isNew: boolean;

  @Output() formSubmit = new EventEmitter<BudgetItem>();


  constructor() { }

  ngOnInit(): void {
    if (this.isNew == null) {
      this.isNew = false;
    }
    if (!this.budgetItem) {
      this.budgetItem = new BudgetItem();
    }
  }

  onFormSubmitted(form: NgForm) {
    this.formSubmit.next(form.value);
    form.reset();
  }

}
