const eightBallAnsers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

exports.getRandom8BallAnswer = (req, res) => {
    let r = Math.floor(Math.random() * eightBallAnsers.length);
    res.send(eightBallAnsers[r]);
}

exports.get8BallAnswerAtIndex = (req, res) => {
    const i = req.params.index;

    if (0 <= i && i < eightBallAnsers.length) {
        // all good
        res.send(eightBallAnsers[i]);
    } else {
        // error
        res.status(404)
            .send({
                message: "8 ball answer was not found. Try requesting a number from 0-19."
            });
    }

}

exports.get8BallAnswer = (req, res) => {

    const question = req.params.question;

    let r = Math.floor(Math.random() * eightBallAnsers.length);
    res.send({
        answer: eightBallAnsers[r],
        question
    });
}