import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  constructor() { }

  ngOnInit(): void {
    this.count = 0;
    setInterval(() => {
      this.count++
    }, 1000);
  }

}
