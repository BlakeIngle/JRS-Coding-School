
module.exports = (app) => {

    const users = require('../controllers/users.controller');
    const { validateWebToken } = require('../auth');

    app.get('/api/users', users.getUserById);

    app.post('/api/users', users.createNewUser);
    app.post('/api/users/login', users.login);
    app.post('/api/users/list', users.addBookToUsersReadingList);

    app.put('/api/users/favorite/:favoriteBookId', users.updateFavoriteBookById);

    app.delete('/api/users/:id', validateWebToken, users.deleteUserById);
}