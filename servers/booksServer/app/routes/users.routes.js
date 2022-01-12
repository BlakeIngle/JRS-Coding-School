module.exports = (app) => {
    const users = require('../controllers/users.controller');

    app.get('/api/users/:id', users.getUserById);

    app.post('/api/users', users.addNewUser);
    app.post('/api/users/login', users.login);

    app.put('/api/users/:id', users.updateUserById);

    app.delete('/api/users/:id', users.deleteUserById);
}