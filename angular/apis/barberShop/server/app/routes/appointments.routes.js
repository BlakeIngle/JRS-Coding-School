module.exports = (app) => {

    const appointments = require("../controllers/appointments.controller");

    app.get("/api/appointments", appointments.getAllAppointments);
    app.get("/api/appointments/:year/:month/:day", appointments.getAppointmentsByDate);
    app.get("/api/barbers/:id/appointments/:year/:month/:day", appointments.getBarbersAppointmentsByDate);

    app.post("/api/appointments", appointments.postNewAppointment);

}