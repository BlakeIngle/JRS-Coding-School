module.exports = (app) => {
    const heroes = require("../controllers/heroes.controller");

    app.get('/api/supers', heroes.getAllSupers);
    // app.get('/api/heroes/:id', heroes.getHeroById);
    // app.put('/api/heroes/:id', heroes.updateHeroById);÷
    // app.delete('/api/heroes/:id', heroes.deleteHeroById);
    // app.post('/api/heroes/', heroes.postNewHero);
}