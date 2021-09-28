module.exports = app => {
    const messages = require('../controllers/messages.controller');

    app.post("/api/messages", messages.postMessage);

    app.get("/api/messages", messages.getAllMessages);
    app.get("/api/messages/:id", messages.getMessageById);
    app.get("/api/user/:userId/messages", messages.getMessagesByUserId);

    app.put("/api/messages", messages.updateMessage);

    app.delete("/api/messages/:id", messages.deleteMessageById);
    app.delete("/api/messages/user/:userId", messages.deleteMessagesByUserId);
}