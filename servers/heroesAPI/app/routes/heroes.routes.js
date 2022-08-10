module.exports = (app) => {

    const heroes = require('../controllers/heroes.controller');

    app.get('/api/heroes', heroes.getAllHeroes);
    app.get('/api/heroes/:id', heroes.getHeroById);

    app.post('/api/heroes', heroes.createHero);

    app.put('/api/heroes/:id', heroes.updateHero);

    app.delete('/api/heroes/:id', heroes.deleteHero);
}