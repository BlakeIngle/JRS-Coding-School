import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/assets/models/budgetItem.model';

@Component({
  selector: 'budged-item-list',
  templateUrl: './budged-item-list.component.html',
  styleUrls: ['./budged-item-list.component.css']
})
export class BudgedItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];

  @Output() itemDeleted = new EventEmitter<BudgetItem>();
  @Output() itemUpdated = new EventEmitter<UpdatedEvent>();

  showDialog: boolean = false;
  selectedItem: BudgetItem;

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(item: BudgetItem) {
    this.itemDeleted.next(item);
  }

  itemClicked(item: BudgetItem) {
    this.showDialog = true;
    this.selectedItem = item;
  }

  editItem(item: UpdatedEvent) {
    this.showDialog = false;
    this.itemUpdated.next(item)
    this.selectedItem = null;
  }

}

interface UpdatedEvent {
  old: BudgetItem;
  new: BudgetItem;
}