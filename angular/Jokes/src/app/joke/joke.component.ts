import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke: {
    question: string,
    punchline: string
  }

  constructor() { }

  ngOnInit(): void {
  }

}
