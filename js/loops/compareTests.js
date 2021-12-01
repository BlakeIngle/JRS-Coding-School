let quiz1 = [
    32,
    14,
    true,
    false,
    false,
    "sin"
]
let quiz2 = [
    16,
    14,
    true,
    true,
    false,
    "cos"
]
let quiz3 = [
    16,
    14,
    true,
    true,
    false,
    "cos"
]

console.log("quiz 2 == quiz 3 ? ", quiz2 == quiz3, "\n")

function compareQuizzes() {
    var sameAnswers = 0;
    for (let i = 0; i < quiz2.length; i++) {
        if (quiz2[i] == quiz3[i]) {
            sameAnswers++;
        }
    }
    console.log("number of matching answers: ", sameAnswers)

}
// compare quiz


var quizzes = [quiz1, quiz2, quiz3]
// compare quizes

for (let i = 0; i < quizzes.length - 1; i++) {
    for (let j = i + 1; j < quizzes.length; j++) {
        compareQuizzes();
    }
}

