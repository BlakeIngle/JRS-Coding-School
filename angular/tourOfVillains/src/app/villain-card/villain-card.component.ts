import { Component, Input, OnInit } from '@angular/core';
import { Villain } from '../../assets/villain';

@Component({
  selector: 'villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent implements OnInit {

  @Input() villain: Villain;
  active: boolean;

  constructor() { }

  ngOnInit(): void {
    this.active = false;
  }

}
