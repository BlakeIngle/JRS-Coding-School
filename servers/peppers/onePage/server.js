const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const app = express();

var corsOptions = {
    origin: "*"
};

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = {};

db.mongoose = mongoose;
db.url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb" //location of database
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


// const getPepper = (mongoose) => {
//     const Pepper = mongoose.model(
//         "pepper",
//         mongoose.Schema({
//             name: String,
//             color: String,
//             shu: {
//                 min: Number,
//                 max: Number
//             }
//         })
//     );
//     return Pepper;
// };

// const Pepper = getPepper(mongoose)

const Pepper = mongoose.model(
    "pepper",
    mongoose.Schema({
        name: String,
        color: String,
        shu: {
            min: Number,
            max: Number
        }
    })
)


app.get("/", (req, res) => {
    res.json({ message: "Welcome to the peppers application." });
});

// Create a new Pepper
app.post("/pepper/", (req, res) => {
    console.log("Peppers request recieved")
    if (!req.body.name || !req.body.color) {
        //pepper requires name and color
        res.status(400).send({ message: "Peppers require name and color." });
        return;
    } else if (req.body.shu.min < 0 || req.body.shu.max < 0) {
        res.status(400).send({ message: "Pepper requires min and max skoville heat units." });
        return;
    }

    // Create the pepper
    const pepper = new Pepper({
        name: req.body.name,
        color: req.body.color,
        shu: {
            min: req.body.shu.min,
            max: req.body.shu.max
        }
    })

    pepper.save(pepper)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating pepper."
            })
        })
});

// Insert many Peppers
app.post("/peppers/", (req, res) => {

    console.log("\nRequest recieved:\n\tInsert multiple peppers\n\nData:", req.body)

    if (!req.body) {
        // no body sent
        res.status(400).send({ message: "Invalid Request: Request must contain a body." })
    } else if (!Array.isArray(req.body)) { // is not an array 
        res.status(400).send({ message: "Invalid Request: Request body must be an array of Peppers" });
    }

    let peppers = req.body;
    for (let pepper of peppers) {
        if (!pepper.name || !pepper.color) {
            //pepper requires name and color
            res.status(400).send({ message: "Invalid data: Peppers must have a name and color", badPepper: pepper });
            return;
        } else if (!pepper.shu.min || !pepper.shu.max) {
            res.status(400).send({ message: "Peppers requires min and max skoville heat units.", badPepper: pepper });
            return;
        }
    }

    Pepper.insertMany(peppers)
        .then(data => {
            res.send({ message: "All peppers inserted", data: data });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating peppers."
            })
        })

})

// Retrieve all Peppers
app.get("/peppers/", (req, res) => {

    console.log("retrieving peppers")
    Pepper.find()
        .then(data => {
            console.log("find finished")
            res.send(data);
        })
        .catch(err => {
            console.log("caught error retrieving peppers")
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Peppers."
            });
        });
    console.log("finished .get /peppers/")
});

// Retrieve a single Pepper with name
app.get("/peppers/:name", (req, res) => {
    const name = req.params.name;

    Pepper.find({ name: name })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Pepper not found with id: " + name });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500)
                .send({ message: "Error retrieving Pepper with name=" + name });
        });
});

// Write new functions on the server:
// (server requests)

// 1.) add multiple peppers to the server in one request
// 2.) return all peppers with a specific color 
//      (use req.param.color and /:color)
app.get("/peppers/color/:color", (req, res) => {

    var color = req.params.color;

    Pepper.find({ color: color })
        .then(data => {
            if (!data) {
                res.status(400).send({ message: "No peppers found" })
            } else if (data.length == 0) {
                res.status(404).send({ message: "No peppers found with color '" + color + "'" })
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.send(500).send({ message: "Error finding peppers by color." })
        })
})

// 3.) return all peppers that are hotter than a specific heat (use min shu)
app.get("/peppers/heat/gt/:heat", (req, res) => {
    const heat = req.params.heat;

    Pepper.find().where('shu.max').gt(heat)
        .then(data => {
            if (!data) {
                res.status(400).send({ message: "No peppers found" })
            } else if (data.length == 0) {
                res.status(404).send({ message: "No peppers found hotter than " + heat + " Skoville Heat Units" })
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.send(500).send({ message: "Error finding hot peppers." })
        })
})

// 4.) return all peppers that are less hot than a specific heat (use max shu)
app.get("/peppers/heat/lt/:heat", (req, res) => {
    const heat = req.params.heat;

    Pepper.find().where('shu.min').lt(heat)
        .then(data => {
            if (!data) {
                res.status(400).send({ message: "No peppers found" })
            } else if (data.length == 0) {
                res.status(404).send({ message: "No peppers found less hot than " + heat + " Skoville Heat Units" })
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.send(500).send({ message: "Error finding not-hot peppers." })
        })
})

app.delete("/pepper/:name", (req, res) => {
    var name = req.params.name;

    var query = { name: name }

    Pepper.findOneAndRemove(query)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Could not delete pepper. No pepper found with name: " + name })
            }
            console.log("delete worked")
            res.send({ message: "Pepper was successfully deleted!" })
        })
        .catch(error => {
            res.status(500).send({ message: "Could not delete pepper." })
        })
})

app.put("/pepper/:id", (req, res) => {
    if (!req.body) {
        res.status(404).send({
            message: "Cannot update pepper with id: " + id
        });
    }

    console.log("updating pepper")
    const id = req.params.id;

    Pepper.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "Cannot update pepper with id: " + id
                });
            } else {
                res.send({ message: "Pepper updated successfully!" })
            }
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error updating Pepper with id: " + id
            })
        });
})


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});