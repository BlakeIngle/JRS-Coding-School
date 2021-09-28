import { Component, OnInit } from '@angular/core';
import { PokemonQuestion } from 'src/app/models/pokemonQuestion.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  maxPokemon: number = 898; // 898 total 'mons
  questions: PokemonQuestion[];
  submitted: boolean;
  activeQuestion: number;
  quizLength: number;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizLength = 10;
    this.activeQuestion = 1; // 1 - first
    this.submitted = false;
    this.questions = this.quizService.generateQuiz(this.quizLength, 0, this.maxPokemon);
  }

  submitQuizClicked() {
    let score = this.quizService.gradeQuiz();
    alert("Your score: " + score + "% Correct");
    this.submitted = true;
  }

  changeQuestion(n: number) {
    let newIndex = this.activeQuestion + n;
    if (newIndex < 0 || newIndex > this.quizLength) {
      return;
    } else {
      this.activeQuestion = newIndex;
    }
  }
}
