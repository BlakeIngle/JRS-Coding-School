/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    const eigthBall = require('../controllers/8ball.controller');

    app.get('/8ball', eigthBall.getRandom8BallAnswer);
    app.get('/8ball/:index', eigthBall.get8BallAnswerAtIndex);
    app.get('/8ball/question/:question', eigthBall.get8BallAnswer);
}