module.exports = app => {
    const users = require('../controllers/users.controller');

    app.post('/api/users', users.postUser);
    app.post('/api/users/login', users.loginUser); // login

    app.get('/api/users', users.getAllUsers);
    app.get('/api/users/:id', users.getUserById);
    app.get('/api/username/:username', users.getUserByUsername);

    app.put('/api/users', users.updateUser);

    app.delete('/api/users/:id', users.deleteUser);
}