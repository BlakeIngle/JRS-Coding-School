const db = require('../index');
const Palette = db.palettes;

exports.getAllPalettes = (req, res) => {
    Palette.find({})
        .then(data => {
            if (data.length == 0) {
                res.status(404)
                    .send({
                        message: "No palettes found with title: " + title
                    });
            } else {
                res.send({
                    message: "Palette retrieved successfully",
                    palettes: data
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send({
                    error: err,
                    message: 'There was an error getting palettes.'
                });
        });
}

exports.getPaletteById = (req, res) => {

    const { id } = req.params;

    if (!id) {
        res.status(500)
            .send({
                message: 'Your request has invalid data in the params'
            });
        return;
    }

    Palette.findById(id)
        .then(data => {
            if (data.length == 0) {
                res.status(404)
                    .send({
                        message: "No palettes found with title: " + title
                    });
            } else {
                res.send({
                    message: "Palette retrieved successfully",
                    palettes: data
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send({
                    error: err,
                    message: 'There was an error getting palettes.'
                });
        });
}

exports.getPalettesByUser = (req, res) => {
    res.send("method not implemented");
}

exports.getPalettesByHexColor = (req, res) => {
    res.send("method not implemented");
}

exports.getPalettesByTitle = (req, res) => {

    const { title } = req.params;

    if (!title) {
        res.status(500)
            .send({
                message: 'Your request has invalid data in the params'
            });
        return;
    }

    Palette.find({ title })
        .then(data => {
            if (data.length == 0) {
                res.status(404)
                    .send({
                        message: "No palettes found with title: " + title
                    });
            } else {
                res.send({
                    message: "Palette retrieved successfully",
                    palettes: data
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send({
                    error: err,
                    message: 'There was an error getting palettes.'
                });
        });
}

exports.createNewPalette = (req, res) => {
    // parse the req body/params
    // validate?
    const { title, colors } = req.body;

    if (!title || !colors) {
        res.status(400)
            .send({
                message: 'Request body contained invalid data.'
            });
    }

    // create some Mongoose object
    const palette = new Palette({ title, colors });

    // 'send' to mongoDB database
    palette.save(palette)
        .then(data => {
            res.send({
                palette: data,
                message: "Your palette was created successfully"
            });
        })
        .catch(err => {
            res.status(500)
                .send({
                    error: err,
                    message: "Some error occurred while creating the palette."
                });
        })
        .finally(() => {
            console.log("this code executes after every response no matter what")
        });

}

exports.updatePaletteById = (req, res) => {
    res.send("method not implemented");
}

exports.updateTitle = (req, res) => {
    res.send("method not implemented");
}

exports.deletePaletteById = (req, res) => {
    res.send("method not implemented");
}

