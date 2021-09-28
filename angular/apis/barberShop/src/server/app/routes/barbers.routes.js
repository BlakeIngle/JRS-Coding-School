module.exports = (app) => {

    const barbers = require("../controllers/barbers.controller");

    app.get("/api/barbers", barbers.getAllBarbers);
    app.get("/api/barbers/:id", barbers.getBarberById);
    app.get("/api/locations/:location/barbers", barbers.getAllBarbersByLocation)

}