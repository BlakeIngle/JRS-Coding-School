module.exports = (app) => {

    const peppers = require("../controllers/peppers.controller");

    app.get("/api", peppers.welcome);

    app.get("/api/peppers", peppers.getAllPeppers);
    app.get("/api/peppers/color/:color", peppers.getPeppersByColor);
    app.get("/api/peppers/name/:name", peppers.getPeppersByName);
    app.get("/api/peppers/id/:id", peppers.getPepperById);

    app.post("/api/pepper", peppers.postNewPepper);

    app.put("/api/pepper/:id", peppers.updatePepper);

    app.delete("/api/pepper/:id", peppers.deletePepperById);
}