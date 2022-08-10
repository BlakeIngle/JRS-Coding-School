import { responses } from '../assets/magic8BallAnswers.js'

const getRandom8BallResponse = (req, res) => {

    const i = Math.floor(Math.random() * responses.length);

    res.send({
        question: req.params.question,
        answer: responses[i]
    });
}

const get8BallResponse = (req, res) => {
    res.send({
        question: req.params.question,
        answer: responses[req.params.i]
    });
}

export default {
    getRandom8BallResponse,
    get8BallResponse
}