import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../../../assets/models/budgetItem.model';

@Component({
  selector: 'edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent implements OnInit {

  @Input() old: BudgetItem;
  @Output() updateItem = new EventEmitter<UpdatedEvent>();

  outputValue: UpdatedEvent = {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.old) {
      this.outputValue.old = this.old
      this.outputValue.new = new BudgetItem(this.old.amount, this.old.description);
    }
  }

  editItem(item: BudgetItem) {
    this.updateItem.next(this.outputValue);
  }
}

interface UpdatedEvent {
  old?: BudgetItem;
  new?: BudgetItem;
}