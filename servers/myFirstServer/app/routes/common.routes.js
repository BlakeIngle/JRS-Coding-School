module.exports = (app) => {

    const common = require('../controllers/common.controller');

    app.get('/', common.getHelloWorld);
    app.get('/jj', common.getJimmyJonhs);
    app.get('/random', common.getRandomNumber);
}