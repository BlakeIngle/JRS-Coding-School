module.exports = (app) => {

    const services = require("../controllers/services.controller");

    app.get("/api/services", services.getServices);
}