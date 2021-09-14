import { Component, Input, OnInit } from '@angular/core';
import { Super } from 'src/app/models/super.model';

@Component({
  selector: 'super-card',
  templateUrl: './super-card.component.html',
  styleUrls: ['./super-card.component.css']
})
export class SuperCardComponent implements OnInit {

  @Input() super: Super;

  constructor() { }

  ngOnInit(): void {
  }

}
