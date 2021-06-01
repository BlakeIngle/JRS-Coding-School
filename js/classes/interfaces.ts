class Rect {
    constructor(public width: number, public height: number){}
}

class Sq extends Rect {
    constructor(sideLength: number) {
        super(sideLength, sideLength)
    }
}

interface QuizResponse {
    correctAnswer: any;
    givenAnswer: any;

    checkAnswer();
}

class QuizGrader implements QuizResponse {
    

    constructor(correctAnswer, givenAnswer) {
        
    }

    correctAnswer: any;
    givenAnswer: any;
    
    checkAnswer() {
        throw new Error("Method not implemented.");
    }

}