var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb?authSource=admin&replicaSet=atlas-fzg1xm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    mydb.collection("peppers", (err, res) => {
        if (err) {
            throw err;
        }

        var myPepper = {
            name: "Ghost Pepper",
            color: "orange",
            shu: {
                min: 850000,
                max: 1040000
            }
        }

        res.insertOne(myPepper, (err, res) => {
            if (err) {
                throw err;
            }

            console.log("\n1 Document Inserted!\n")
            db.close();
        })
    })
})