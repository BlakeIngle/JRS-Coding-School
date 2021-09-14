module.exports = (app) => {

    const appointments = require("../controllers/appointments.controller");

    app.get("/api/appointments", appointments.getAllAppointments);
    app.get("/api/appointments/:year/:month/:day", appointments.getAppointmentsByDate);

    app.post("/api/appointments", appointments.postNewAppointment);

}