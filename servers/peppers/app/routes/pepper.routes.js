module.exports = app => {
    const peppers = require("../controllers/pepper.controller.js");

    var router = require("express").Router();

    // Create a new Pepper
    router.post("/", peppers.create);

    // Retrieve all Peppers
    router.get("/", peppers.findAll);

    // Retrieve a single Pepper with id
    router.get("/:id", peppers.findOne);

    app.use('/api/peppers', router);
};