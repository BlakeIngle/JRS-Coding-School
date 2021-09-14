export class Question {
    questionText: string;
    options: string[];
    answer: string;
    userAnswer?: string;

    constructor(questionText: string, options: string[], answer: string) {
        this.questionText = questionText;
        this.options = [];
        for (let option of options) {
            this.options.push(option);
        }
        this.answer = answer;
    }
}