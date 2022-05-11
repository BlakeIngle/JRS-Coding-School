module.exports = (app) => {

    const palettes = require('../controllers/palettes.controller');

    // router = ...router...

    app.get('/api/palettes', palettes.getAllPalettes);
    app.get('/api/palettes/:id', palettes.getPaletteById);
    app.get('/api/palettes/user/:userId', palettes.getPalettesByUser);
    app.get('/api/palettes/color/:hexColor', palettes.getPalettesByHexColor);
    app.get('/api/palettes/title/:title', palettes.getPalettesByTitle);

    app.post('/api/palettes', palettes.createNewPalette);

    app.put('/api/palettes/:id', palettes.updatePaletteById);
    app.put('/api/palettes/title/:title', palettes.updateTitle);

    app.delete('/api/palettes/:id', palettes.deletePaletteById);

    // app.use router
}