import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../../../assets/models/budgetItem.model';

@Component({
  selector: 'budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem
  @Input() isIncome: boolean = true;

  @Output() xClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onXClicked() {
    this.xClicked.next()
  }

}
