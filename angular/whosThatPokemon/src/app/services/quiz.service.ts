import { Injectable } from '@angular/core';
import { PokemonQuestion } from '../models/pokemonQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: PokemonQuestion[];

  constructor() {
    this.questions = [];
    this.questions.push(
      new PokemonQuestion("Tyranitar", ["Tyranitar", "Typhlosion", "Aggron", "Claydol"], "tyranitar.png"),
      new PokemonQuestion("Pikachu", ["Pachirisu", "Plusle", "Pikachu", "Mimikyu"], "pikachu.png"),
      new PokemonQuestion("Suicune", ["Arcanine", "Suicune", "Arceus", "Milotic"], "suicune.png"),
      new PokemonQuestion("Turtwig", ["Grookey", "Tirtouga", "Turtwig", "Wartortle"], "turtwig.png"),
      new PokemonQuestion("Celebi", ["Celebi", "Jirachi", "Mew", "Chimecho"], "celebi.png"),
      new PokemonQuestion("Wurmple", ["Caterpie", "Larvesta", "Spewpa", "Wurmple"], "wurmple.png"),
      new PokemonQuestion("Rhyhorn", ["Rhyhorn", "Camerupt", "Torkoal", "Rhydon"], "rhyhorn.png"),
      new PokemonQuestion("Dusclops", ["Combusken", "Dusclops", "Giratina", "Haunter"], "dusclops.png"),
      new PokemonQuestion("Cyndaquil", ["Chimchar", "Charmeleon", "Sentret", "Cyndaquil"], "cyndaquil.png"),
      new PokemonQuestion("Krabby", ["Crabrawler", "Pinser", "Crawdaunt", "Krabby"], "krabby.jpg"),
    )
  }

  public getQuestions(): PokemonQuestion[] {
    return this.questions;
  }

  public gradeQuiz(): number {
    let numCorrect: number = 0;
    let numQuestions: number = this.questions.length;

    for (let question of this.questions) {
      if (question.userAnswer == question.answer) {
        numCorrect++;
      }
    }

    return Number((numCorrect / numQuestions * 100).toFixed(2));
  }
}
