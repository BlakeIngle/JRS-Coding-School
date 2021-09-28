import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonQuestion } from '../models/pokemonQuestion.model';

const POKE_API = "https://pokeapi.co/api/v2/pokemon";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: PokemonQuestion[];

  constructor(private http: HttpClient) {
    this.questions = [];
    // this.questions.push(
    //   new PokemonQuestion("Tyranitar", ["Tyranitar", "Typhlosion", "Aggron", "Claydol"], "tyranitar.png"),
    //   new PokemonQuestion("Pikachu", ["Pachirisu", "Plusle", "Pikachu", "Mimikyu"], "pikachu.png"),
    //   new PokemonQuestion("Suicune", ["Arcanine", "Suicune", "Arceus", "Milotic"], "suicune.png"),
    //   new PokemonQuestion("Turtwig", ["Grookey", "Tirtouga", "Turtwig", "Wartortle"], "turtwig.png"),
    //   new PokemonQuestion("Celebi", ["Celebi", "Jirachi", "Mew", "Chimecho"], "celebi.png"),
    //   new PokemonQuestion("Wurmple", ["Caterpie", "Larvesta", "Spewpa", "Wurmple"], "wurmple.png"),
    //   new PokemonQuestion("Rhyhorn", ["Rhyhorn", "Camerupt", "Torkoal", "Rhydon"], "rhyhorn.png"),
    //   new PokemonQuestion("Dusclops", ["Combusken", "Dusclops", "Giratina", "Haunter"], "dusclops.png"),
    //   new PokemonQuestion("Cyndaquil", ["Chimchar", "Charmeleon", "Sentret", "Cyndaquil"], "cyndaquil.png"),
    //   new PokemonQuestion("Krabby", ["Crabrawler", "Pinser", "Crawdaunt", "Krabby"], "krabby.jpg"),
    // )
  }

  generateQuiz(length: number, minPokeId: number, maxPokeId: number) {
    let quiz = [];
    for (let i = 0; i < length; i++) {
      let randId = this.randomBetween(minPokeId, maxPokeId);
      this.http.get(`${POKE_API}/${randId}`)
        .subscribe((data: any) => {
          let name = data.name;
          let q = new PokemonQuestion(randId);
          let otherNames = [];
          for (let i = 0; i < 3; i++) {
            this.http.get(`${POKE_API}/${randId}`)
              .subscribe((data: any) => {

              }, error => {

              });
          }
          q.makeOptions(name, "", "", "");
          quiz.push()
        }, error => {
          // try again ?
        })
    }

    return quiz;
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

  /**
   * Returns a random integer between two boundaries (inclusive)
   * @param a lower bound
   * @param b upper bound
   * @returns a random integer between a and b (inclusive)
   */
  private randomBetween(a, b) {
    return Math.floor(Math.random() * (Math.max(a, b) + 1 - Math.min(a, b))) + Math.min(a, b)
  }
}
