module.exports = (app) => {

    const urls = require('../controllers/urls.controller.js');

    app.get('/api/urls', urls.getAllUrls);
    app.get('/api/urls/:id', urls.getUrlById);

    app.post('/api/urls', urls.createUrl);

    app.delete('/api/urls', urls.deleteUrl);
}