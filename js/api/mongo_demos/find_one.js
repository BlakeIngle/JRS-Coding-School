var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-fzg1xm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    // find one doc in the peppers collection
    mydb.collection("peppers").findOne({}, (err, result) => {
        if (err) {
            throw err;
        }

        console.log("Name: " + result.name)

        db.close();
    })
})