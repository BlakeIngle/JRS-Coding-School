module.exports = (app) => {

    const locations = require("../controllers/locations.controller");

    app.get("/api/locations", locations.getAllLocations);
}