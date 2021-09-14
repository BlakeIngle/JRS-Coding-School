import { Question } from "./question.model";

export class PokemonQuestion extends Question {
    silhouette: string;

    constructor(answer: string, options: string[], silhouetteImgFileName: string) {
        super("Who's that Pokémon?", options, answer);
        this.silhouette = silhouetteImgFileName;
    }
}