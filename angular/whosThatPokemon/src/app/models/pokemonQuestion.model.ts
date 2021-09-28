export class PokemonQuestion {

    id: string;
    options: string[];
    answer: string;
    userAnswer?: string;

    constructor(id: number) {
        // add two leading 0s if needed
        this.id = ("00" + id).slice(-3);
        this.options = [];
    }

    makeOptions(answer: string, wrong1: string, wrong2: string, wrong3: string) {
        let options = [answer, wrong1, wrong2, wrong3];
        for (let i = 4; i > 0; i--) {
            let r = Math.floor(Math.random() * i);
            this.options.push(options.splice(r, 1)[0]);
            //remove from options array and add to this.options array
        }
    }
}