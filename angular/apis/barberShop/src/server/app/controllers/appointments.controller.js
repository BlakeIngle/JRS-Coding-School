const db = require('../index');

exports.postNewAppointment = (req, res) => {

    const barber = req.body.barber;
    const jsTime = req.body.time; // js Date 'YYYY-MM-DDThh:mm:ss.mmmZ'
    var time = ""; // sql datetime string 'YYYY-MM-DD hh:mm:ss'
    var t = jsTime.split(/[T.]/);
    time = t[0] + " " + t[1];

    const service = req.body.service;

    const query = "INSERT INTO `barber_shop`.`appointments` \
                        (`barber`, `time`, `service`) \
                    VALUES \
                        (?, ?, ?);"

    const placeholders = [barber, time, service];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving appointments." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No appointments found." });
            } else {
                res.send(results);
            }
        }
    });
}

exports.getAllAppointments = (req, res) => {

    const query = "SELECT * FROM barber_shop.appointments;"

    db.query(query, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving appointments." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No appointments found." });
            } else {
                res.send(results);
            }
        }
    });
}

exports.getAppointmentsByDate = (req, res) => {

    const year = req.params.year;
    const month = req.params.month;
    const day = req.params.day;

    const query = "SELECT appointments.id, appointments.time, \
                        services.duration, services.description, \
                        barbers.firstName, barbers.lastName,\
                        locations.address \
                    FROM appointments \
                    INNER JOIN services \
                        ON appointments.service = services.id \
                    INNER JOIN barbers \
                        ON appointments.barber = barbers.id \
                    INNER JOIN locations \
                        ON barbers.location = locations.id \
                    WHERE \
                        year(time) = ? \
                        and month(time) = ? \
                        and day(time)= ? ;"

    const placeholders = [year, month, day];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving appointments." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No appointments found for date: " + year + "/" + month + "/" + day });
            } else {
                res.send(results);
            }
        }
    });
}