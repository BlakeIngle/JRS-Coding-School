var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-fzg1xm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    var myData = [{
        name: "Serrano",
        color: "green",
        shu: {
            min: 8000,
            max: 22000
        }
    }, {
        name: "Cayenne",
        color: "red",
        shu: {
            min: 30000,
            max: 50000
        }
    }, {
        name: "Chocolate Habanero",
        color: "brown",
        shu: {
            min: 300000,
            max: 425000
        }
    }, {
        name: "NuMex Big Jim",
        color: "red",
        shu: {
            min: 500,
            max: 2500
        }
    }, {
        name: "Chipotle",
        color: "brown",
        shu: {
            min: 5000,
            max: 8000
        }
    }]

    mydb.collection("peppers")
        .insertMany(myData, (err, res) => {
            if (err) {
                throw err;
            }

            console.log("\n\tNumber of documents inserted: " + res.insertedCount);
            db.close();
        })
})