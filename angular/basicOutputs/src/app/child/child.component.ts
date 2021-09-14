import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() macaroniClicked = new EventEmitter<string>();
  @Output() cheeseClicked = new EventEmitter<string>();

  macCount: number;
  cheeseCount: number;

  constructor() { }

  ngOnInit(): void {
    this.macCount = 0;
    this.cheeseCount = 0;
  }

  onMacaroniClick() {
    this.macCount++;
    // emit macClicked event
    this.macaroniClicked.next("" + this.macCount);
  }

  onCheeseClick() {
    this.cheeseCount++;
    
    this.cheeseClicked.next("" + this.cheeseCount);
  }

}
