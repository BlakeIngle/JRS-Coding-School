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

// define the schema/model for an animal
const Animal = mongoose.model(
    "animal",
    mongoose.Schema({
        name: String, // dog - all lowercase
        className: String, // mamal, bird, fish
        numLegs: Number,

        latinName: String, // Canis lupus - capital first word
        diet: String,
        habitat: String, // jungle, desert, forest
    })
)

// define url requests

// get all animals
app.get("/api/animals/", (req, res) => {
    console.log("Getting animals")

    Animal.find()
        .then(data => {
            if (!data) {
                console.log("Error retrieving animals")
                res.status(404).send({ message: "Cannot find animals" })
            } else if (data.length == 0) {
                console.log("Error retrieving animals")
                res.status(404).send({ message: "No animals found" })
            }

            console.log("Animals retrieved successfully")
            res.send(data)
        })
        .catch(error => {
            console.error("Error retrieving animals: ", error)
            res.status(500).send({ message: "Error retrieving animals", error: error })
        })

    console.log("\n\tFinished request\n")
})

// post one animal
app.post("/api/animal", (req, res) => {
    console.log("Request recieved: posting animal\n")
        // validate req body
        {
            if (!req.body) {
                res.status(400).send({ message: "Cannot post animal. No body defined in request." })
            } else if (!req.body.name) {
                res.status(400).send({ message: "Cannot post animal. Animals must have a name." })
            } else if (!req.body.latinName) {
                res.status(400).send({ message: "Cannot post animal. Animals must have a scientific name." })
            } else if (!req.body.className) {
                res.status(400).send({ message: "Cannot post animal. Animals must belong to a class: bird, mammal, fish, ..." })
            } else if (!req.body.diet) {
                res.status(400).send({ message: "Cannot post animal. Animals diet must be defined: herbivore, carnivore, or omnivore." })
            } else if (!req.body.numLegs) {
                res.status(400).send({ message: "Cannot post animal. You must define the number of legs." })
            } else if (!req.body.habitat) {
                res.status(400).send({ message: "Cannot post animal. You must define the animal's habitat." })
            }
        }

    const animal = new Animal({
        name: req.body.name,
        latinName: req.body.latinName,
        className: req.body.className,
        numLegs: req.body.numLegs,
        habitat: req.body.habitat,
        diet: req.body.diet,
    });

    animal.save(animal)
        .then(data => {
            console.log("Animal posted")
            res.send({ message: "Animal created successfully!", animal: data })
        })
        .catch(error => {
            console.error("Error posting animal: ", error)
            res.status(500).send({ message: "Error posting animal.", error: error })
        })

    console.log("\n\tFinished request\n")
})

// update one animal by id
app.put("/api/animal/:id", (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot update animal. No body defined in request." })
    }

    const id = req.params.id
    const data = req.body

    Animal.findByIdAndUpdate(id, data, { useFindAndModify: false })
        .then(data => {
            res.send({ message: "Animal updated with id=" + id, data: data })
        })
        .catch(error => {
            console.error("Error updating animal: ", error)
            res.status(500).send({ message: "Error creating animal.", error: error })
        })

    console.log("\n\tFinished request\n")
})

// delete one animal by id
app.delete("/api/animal/:id", (req, res) => {

    console.log("Request recieved: delete animal\n")

    const id = req.params.id
    const query = { _id: id }

    Animal.deleteOne(query)
        .then(data => {
            console.log("Animal deleted")
            res.send({ message: "Animal deleted with id=" + id, data: data })
        })
        .catch(error => {
            console.log("Error deleting animal")
            res.status(500).send({ message: "Error deleting animal with id=" + id, error: error })
        })

    console.log("\n\tFinished request\n")
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});