import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: {
    description: string,
    title: string,
    image: string,
    id: string,
    resultType: string
  }

  constructor() { }

  ngOnInit(): void {
  }

}
