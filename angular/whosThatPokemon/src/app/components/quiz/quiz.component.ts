import { Component, OnInit } from '@angular/core';
import { PokemonQuestion } from 'src/app/models/pokemonQuestion.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: PokemonQuestion[];
  submitted: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.submitted = false;
    this.questions = this.quizService.getQuestions();
    console.log(this.questions)
  }

  submitQuizClicked() {
    let score = this.quizService.gradeQuiz();
    alert("Your score: " + score + "% Correct");
    this.submitted = true;
  }
}
