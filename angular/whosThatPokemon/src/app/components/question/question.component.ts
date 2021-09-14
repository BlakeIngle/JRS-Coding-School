import { Component, Input, OnInit } from '@angular/core';
import { PokemonQuestion } from 'src/app/models/pokemonQuestion.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: PokemonQuestion;
  @Input() reveal: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option: string) {
    this.question.userAnswer = option;
  }

}
