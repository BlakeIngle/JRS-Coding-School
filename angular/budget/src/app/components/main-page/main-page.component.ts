import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../../../assets/models/budgetItem.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public budgetItems: BudgetItem[];
  totalBudget: number;

  constructor() { }

  ngOnInit(): void {
    this.budgetItems = [];
    this.totalBudget = 0;
  }

  deleteItem(item: BudgetItem) {
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1)
    this.totalBudget -= item.amount;
  }

  updateItem(evt: UpdatedEvent) {
    var i = this.budgetItems.indexOf(evt.old);
    this.totalBudget -= this.budgetItems[i].amount;
    this.budgetItems[i].amount = evt.new.amount
    this.budgetItems[i].description = evt.new.description

    this.totalBudget += evt.new.amount;
  }

  addNewItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem)
    this.totalBudget += newItem.amount
  }

}

interface UpdatedEvent {
  old: BudgetItem;
  new: BudgetItem;
}