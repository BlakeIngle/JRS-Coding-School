import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Super } from 'src/app/models/super.model';

@Component({
  selector: 'super-list',
  templateUrl: './super-list.component.html',
  styleUrls: ['./super-list.component.css']
})
export class SuperListComponent implements OnInit {

  @Input() supers: any[];
  @Input() selectedSuper: Super;

  @Output() superSelected = new EventEmitter<Super>();

  constructor() { }

  ngOnInit(): void {
  }

  superClicked(superObj: Super) {
    this.superSelected.emit(superObj)
  }

}
