module.exports = (app) => {

    const urls = require('../controllers/urls.controller.js');

    app.get('/api/urls', urls.getAllUrls);
    app.get('/api/urls/:id', urls.getUrlById);
    app.get('/api/urls/search/:subStr', urls.searchUrls);

    app.post('/api/urls', urls.createUrl);

    app.delete('/api/urls', urls.deleteUrl);
}