import _8BallFunctions from '../controllers/8ball.controller.js';

export default (app) => {
    app.get('/8ball/:question', _8BallFunctions.getRandom8BallResponse);

    app.get('/8ball/:i/:question', _8BallFunctions.get8BallResponse);
}
