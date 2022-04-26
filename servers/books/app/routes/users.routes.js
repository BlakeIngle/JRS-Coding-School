module.exports = (app) => {

    const users = require('../controllers/users.controller');

    app.get('/api/users', users.getUserById);
    app.post('/api/users', users.createNewUser);
    app.put('/api/users', users.updateUser);
    app.delete('/api/users', users.deleteUserById);

}